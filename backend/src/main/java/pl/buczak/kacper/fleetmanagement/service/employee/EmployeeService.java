package pl.buczak.kacper.fleetmanagement.service.employee;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeCredentialsDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeFullDTO;
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
    private static final String DEFAULT_PASSWORD = "default";

    public EmployeeService(EmployeeRepository employeeRepository, RoleRepository roleRepository, ModelMapper modelMapper, PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public List<EmployeeDTO> findEmployeesDTOList() {
        return employeeRepository
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
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

    public EmployeeFullDTO createEmployee(EmployeeFullDTO employeeFullDTO) {
        Employee employee = new Employee();
        modelMapper.map(employeeFullDTO, employee);
        employee.setEnabled(true);
        employee.setTokenExpired(true);
        employee.setPassword(passwordEncoder.encode(DEFAULT_PASSWORD));
        employee.setRoles(null);
        return this.entityToFullDTO(this.employeeRepository.save(employee));
    }

    public EmployeeFullDTO changeCredentials(Long employeeId, EmployeeCredentialsDTO employeeCredentialsDTO) {
        Employee employeeToEdit = this.employeeRepository.getOne(employeeId);
        employeeToEdit.setPassword(passwordEncoder.encode(employeeCredentialsDTO.getPassword()));
        return this.entityToFullDTO(this.employeeRepository.save(employeeToEdit));
    }

    private EmployeeDTO entityToSimpleDTO(Employee employee) {
        EmployeeDTO employeeDTO = modelMapper.map(employee, EmployeeDTO.class);
        return employeeDTO;
    }

    private EmployeeFullDTO entityToFullDTO(Employee employee) {
        EmployeeFullDTO employeeDTO = modelMapper.map(employee, EmployeeFullDTO.class);
        return employeeDTO;
    }


    public EmployeeFullDTO setActive(Long employeeId, boolean active) {
        Employee employee = employeeRepository.getOne(employeeId);
        employee.setEnabled(active);
        return entityToFullDTO(employeeRepository.save(employee));
    }


}
