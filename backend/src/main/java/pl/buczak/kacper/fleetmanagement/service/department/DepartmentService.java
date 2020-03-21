package pl.buczak.kacper.fleetmanagement.service.department;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Department;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.DepartmentDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.DepartmentFullDTO;
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


    private DepartmentDTO entityToSimpleDTO(Department department) {
        DepartmentDTO departmentDTO = modelMapper.map(department, DepartmentDTO.class);
        return departmentDTO;
    }

    private DepartmentFullDTO entityToFullDTO(Department department) {
        DepartmentFullDTO departmentFullDTO = modelMapper.map(department, DepartmentFullDTO.class);
        return departmentFullDTO;
    }
}
