package pl.buczak.kacper.fleetmanagement.service;

import jdk.jshell.spi.ExecutionControl;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

/*
    @author Kacper Buczak 
*/
@Service
public class ExampleSecuredService {
    // TODO Remove this, as this is only an example.

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    private List<Object> preAuthorizeAdmin() throws ExecutionControl.NotImplementedException {
        throw new ExecutionControl.NotImplementedException("Not implemented");
    }

    @PreAuthorize("hasRole('ROLE_EMPLOYEE')")
    private List<Object> preAuthorizeEmployee() throws ExecutionControl.NotImplementedException {
        throw new ExecutionControl.NotImplementedException("Not implemented");
    }
}
