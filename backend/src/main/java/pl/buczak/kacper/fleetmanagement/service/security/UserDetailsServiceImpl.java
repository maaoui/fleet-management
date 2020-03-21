package pl.buczak.kacper.fleetmanagement.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Privilege;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Role;
import pl.buczak.kacper.fleetmanagement.repository.employee.EmployeeRepository;
import pl.buczak.kacper.fleetmanagement.repository.employee.RoleRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/*
    @author Kacper Buczak 
*/

@Transactional
@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private RoleRepository roleRepository;

    public UserDetailsServiceImpl() {
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Employee employee = employeeRepository.findbyEmail(email);
        if (employee == null) {
            throw new UsernameNotFoundException("Not found");
        } else {
            return new org.springframework.security.core.userdetails.User(
                    employee.getEmail(), employee.getPassword(), employee.isEnabled(), true, true,
                    true, getAuthorities(employee.getRoles()));
        }

    }

    private Collection<? extends GrantedAuthority> getAuthorities(
            Collection<Role> roles) {

        return getGrantedAuthorities(getPrivileges(roles));
    }

    private List<String> getPrivileges(Collection<Role> roles) {

        List<String> privileges = new ArrayList<>();
        List<Privilege> collection = new ArrayList<>();
        for (Role role : roles) {
            collection.addAll(role.getPrivileges());
        }
        for (Privilege privilege : collection) {
            privileges.add(privilege.getName());
        }
        return privileges;
    }

    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges) {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}
