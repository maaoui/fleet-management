package pl.buczak.kacper.fleetmanagement.service.department;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Department;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Region;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.AddressDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.DepartmentDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.DepartmentFullDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;
import pl.buczak.kacper.fleetmanagement.repository.department.DepartmentRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class DepartmentService {

    private DepartmentRepository departmentRepository;

    private ModelMapper modelMapper;

    public DepartmentService(DepartmentRepository departmentRepository, ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
        this.departmentRepository = departmentRepository;
    }

    public List<DepartmentDTO> getDepartmentsList() {
        return departmentRepository
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }


    public List<DepartmentDTO> getDepartmentsListByRegionId(Long regionId) {
        return departmentRepository
                .findDepartmentsByRegionId(regionId)
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public DepartmentFullDTO getDepartmentById(Long departmentId) {
        return departmentRepository
                .findById(departmentId)
                .map(this::entityToFullDTO)
                .get();
    }

    public DepartmentFullDTO createDepartment(DepartmentFullDTO departmentFullDTO) {
        Department department = new Department();
        department.setDepartmentName(departmentFullDTO.getDepartmentName());
        department.setAddress(addressDTOToAddressMapper(departmentFullDTO.getAddress()));
        department.setRegion(regionDTOToRegionMapper(departmentFullDTO.getRegion()));
        department.setEmployees(extractEmployeeListFromDepartmentFullDto(departmentFullDTO));
        return entityToFullDTO(departmentRepository.save(department));
    }

    public DepartmentFullDTO editDepartment(DepartmentFullDTO departmentFullDTO) {
        Department department = departmentRepository.getOne(departmentFullDTO.getId());
        department.setDepartmentName(departmentFullDTO.getDepartmentName());
        department.setAddress(addressDTOToAddressMapper(departmentFullDTO.getAddress()));
        department.setRegion(regionDTOToRegionMapper(departmentFullDTO.getRegion()));
        department.setEmployees(extractEmployeeListFromDepartmentFullDto(departmentFullDTO));
        return entityToFullDTO(departmentRepository.save(department));
    }


    private List<Employee> extractEmployeeListFromDepartmentFullDto(DepartmentFullDTO departmentFullDTO) {
        return departmentFullDTO
                .getEmployees()
                .stream()
                .map(this::employeeDTOToEmployeeMapper)
                .collect(Collectors.toList());
    }

    private DepartmentDTO entityToSimpleDTO(Department department) {
        DepartmentDTO departmentDTO = modelMapper.map(department, DepartmentDTO.class);
        return departmentDTO;
    }

    private DepartmentFullDTO entityToFullDTO(Department department) {
        DepartmentFullDTO departmentFullDTO = modelMapper.map(department, DepartmentFullDTO.class);
        return departmentFullDTO;
    }

    private Address addressDTOToAddressMapper(AddressDTO addressDTO) {
        return modelMapper.map(addressDTO, Address.class);
    }

    private Region regionDTOToRegionMapper(RegionDTO regionDTO) {
        return modelMapper.map(regionDTO, Region.class);
    }

    private Employee employeeDTOToEmployeeMapper(EmployeeDTO employeeDTO) {
        return modelMapper.map(employeeDTO, Employee.class);
    }

}
