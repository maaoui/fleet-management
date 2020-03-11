package pl.buczak.kacper.fleetmanagement.entity.dao.employee;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.util.enums.AuthorityType;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/

@Entity
@Table(name = "credentials")
public class Credentials extends BaseEntity {

    @Size(max = 30)
    @Column(nullable = false, name = "email")
    private String email;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Size(max = 256)
    @Column(columnDefinition = "varchar(256) default 'ROLE_USER'")
    private AuthorityType authorityType;

    @NotNull
    @NotBlank
    private String hashedPassword;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public AuthorityType getAuthorityType() {
        return authorityType;
    }

    public void setAuthorityType(AuthorityType authorityType) {
        this.authorityType = authorityType;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }
}
