package pl.buczak.kacper.fleetmanagement.util.Jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import pl.buczak.kacper.fleetmanagement.service.security.UserDetailsServiceImpl;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/*
    @author Kacper Buczak 
*/
@Component
public class JwtTokenUtil implements Serializable {

    public static final long JWT_TOKEN_VALIDITY_SECONDS = 2 * 60 * 60;

    @Value("${jwt.secretKey}")
    private String secret;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    private static final long serialVersionUID = -121624321856818565L;

    public String getUsernameFromToken(String token) {
        return this.getClaimFromToken(token, Claims::getSubject);
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails);
    }

    private String doGenerateToken(Map<String, Object> claims, UserDetails userDetails) {
        final long issuedAtInMilliseconds = System.currentTimeMillis();
        final long expirationDateInMilliseconds = issuedAtInMilliseconds + JWT_TOKEN_VALIDITY_SECONDS * 1000;

        claims.put("privileges", userDetails.getAuthorities());

        return Jwts
                .builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(issuedAtInMilliseconds))
                .setExpiration(new Date(expirationDateInMilliseconds))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
