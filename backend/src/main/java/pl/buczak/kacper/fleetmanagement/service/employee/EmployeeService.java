package pl.buczak.kacper.fleetmanagement.service.employee;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Role;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeFullDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeWithCredentialsDTO;
import pl.buczak.kacper.fleetmanagement.repository.department.DepartmentRepository;
import pl.buczak.kacper.fleetmanagement.repository.employee.EmployeeRepository;
import pl.buczak.kacper.fleetmanagement.repository.employee.RoleRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;
    private RoleRepository roleRepository;
    private ModelMapper modelMapper;
    private PasswordEncoder passwordEncoder;
    private DepartmentRepository departmentRepository;

    public EmployeeService(EmployeeRepository employeeRepository, RoleRepository roleRepository, ModelMapper modelMapper, PasswordEncoder passwordEncoder, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
        this.departmentRepository = departmentRepository;
    }

    public List<EmployeeFullDTO> findEmployeesDTOList() {
        return employeeRepository
                .findAll()
                .stream()
                .map(this::entityToFullDTO)
                .collect(Collectors.toList());
    }

    public List<EmployeeDTO> findEmployeesDTOListByDepartmentId(Long departmentId) {
        return employeeRepository
                .findByDepartmentId(departmentId)
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public EmployeeFullDTO findFullDTOById(Long employeeId) {
        return employeeRepository
                .findById(employeeId)
                .map(this::entityToFullDTO)
                .get();
    }

    @Transactional
    public EmployeeFullDTO editEmployee(Long employeeId, EmployeeFullDTO employeeFullDTO) {
        Employee employee = this.employeeRepository.getOne(employeeId);
        modelMapper.map(modelMapper.map(employeeFullDTO, EmployeeDTO.class), employee);
        employee.setRoles(prepareRolesForCurrentlyEditedUser(employeeFullDTO));
        employee.setDepartment(this.departmentRepository.getOne(employeeFullDTO.getDepartment().getId()));
        return this.entityToFullDTO(this.employeeRepository.save(employee));
    }

    private List<Role> prepareRolesForCurrentlyEditedUser(EmployeeFullDTO employeeFullDTO) {
        List<Role> roles = employeeFullDTO
                .getRoles()
                .stream()
                .map(roleDTO -> this.roleRepository.findByName(roleDTO.getName()))
                .collect(Collectors.toList());
        if (roles.isEmpty()) {
            roles.add(this.roleRepository.findDefaultUserRole());
        }
        return roles;
    }

    public EmployeeWithCredentialsDTO createEmployee(EmployeeWithCredentialsDTO employeeWithCredentialsDTO) {
        Employee employee = new Employee();
        modelMapper.map(employeeWithCredentialsDTO, employee);
        employee.setEnabled(true);
        employee.setTokenExpired(true);
        employee.setPassword(encodePassword(employeeWithCredentialsDTO.getPassword()));
        employee.setRoles(null);
        return this.entityToDTOWithCredentials(this.employeeRepository.save(employee));
    }

    public EmployeeWithCredentialsDTO changeCredentials(Long employeeId, EmployeeWithCredentialsDTO employeeWithCredentialsDTO) {
        Employee employeeToEdit = this.employeeRepository.getOne(employeeId);
        employeeToEdit.setPassword(encodePassword(employeeWithCredentialsDTO.getPassword()));
        return this.entityToDTOWithCredentials(this.employeeRepository.save(employeeToEdit));
    }

    public EmployeeFullDTO setActive(Long employeeId, boolean active) {
        Employee employee = employeeRepository.getOne(employeeId);
        employee.setEnabled(active);
        return entityToFullDTO(employeeRepository.save(employee));
    }

    private String encodePassword(String passwordToEncode) {
        return passwordEncoder.encode(passwordToEncode);
    }

    private EmployeeDTO entityToSimpleDTO(Employee employee) {
        return modelMapper.map(employee, EmployeeDTO.class);
    }

    private EmployeeFullDTO entityToFullDTO(Employee employee) {
        return modelMapper.map(employee, EmployeeFullDTO.class);
    }

    private EmployeeWithCredentialsDTO entityToDTOWithCredentials(Employee employee) {
        return modelMapper.map(employee, EmployeeWithCredentialsDTO.class);
    }
}
