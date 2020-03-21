package pl.buczak.kacper.fleetmanagement.controller.department;

/*
    @author Kacper Buczak 
*/

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.DepartmentDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.DepartmentFullDTO;
import pl.buczak.kacper.fleetmanagement.service.department.DepartmentService;

import javax.validation.constraints.NotBlank;
import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class DepartmentController {

    private DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping(value = "/departments")
    public ResponseEntity<List<DepartmentDTO>> getDepartmentsList() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(departmentService.getDepartmentsList());
    }

    @GetMapping(value = "/departmentsByRegionId")
    public ResponseEntity<List<DepartmentDTO>> getDepartmentsListByRegion(@NotBlank @RequestParam(name = "id") Long regionId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(departmentService.getDepartmentsListByRegionId(regionId));
    }

    @GetMapping(value = "/department")
    public ResponseEntity<DepartmentFullDTO> getFullDepartmentInformation(@NotBlank @RequestParam(name = "id") Long departmentId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(departmentService.getDepartmentById(departmentId));
    }

}
