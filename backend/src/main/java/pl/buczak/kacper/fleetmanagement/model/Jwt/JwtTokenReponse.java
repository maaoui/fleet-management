package pl.buczak.kacper.fleetmanagement.model.Jwt;

import java.io.Serializable;

/*
    @author Kacper Buczak 
*/
public class JwtTokenReponse implements Serializable {

    private static final long serialVersionUID = -8907219043821382190L;

    private final String jwtToken;

    public JwtTokenReponse(String jwttoken) {
        this.jwtToken = jwttoken;
    }

    public String getToken() {
        return this.jwtToken;
    }
}
