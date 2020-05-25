package pl.buczak.kacper.fleetmanagement.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping("/principal")
public class ExampleController {

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('PRIVILEGE_FOR_ROLE_ADMIN_1')")
    public Principal adminSecured(Principal principal) {
        return principal;
    }

    @GetMapping("/principal")
    @PreAuthorize("hasAuthority('PRIVILEGE_FOR_ROLE_EMPLOYEE_1')")
    public Principal employeeSecured(Principal principal) {
        return principal;
    }
}
