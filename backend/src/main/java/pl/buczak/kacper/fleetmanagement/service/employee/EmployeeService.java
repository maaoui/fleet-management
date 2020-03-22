package pl.buczak.kacper.fleetmanagement.service.employee;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeFullDTO;
import pl.buczak.kacper.fleetmanagement.repository.employee.EmployeeRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    private ModelMapper modelMapper;

    public EmployeeService(EmployeeRepository employeeRepository, ModelMapper modelMapper) {
        this.employeeRepository = employeeRepository;
        this.modelMapper = modelMapper;
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


    private EmployeeDTO entityToSimpleDTO(Employee employee) {
        EmployeeDTO employeeDTO = modelMapper.map(employee, EmployeeDTO.class);
        return employeeDTO;
    }

    private EmployeeFullDTO entityToFullDTO(Employee employee) {
        EmployeeFullDTO employeeDTO = modelMapper.map(employee, EmployeeFullDTO.class);
        return employeeDTO;
    }


}
