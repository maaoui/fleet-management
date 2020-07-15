package pl.buczak.kacper.fleetmanagement.controller.employee;

/*
    @author Kacper Buczak 
*/

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeWithCredentialsDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeFullDTO;
import pl.buczak.kacper.fleetmanagement.service.employee.EmployeeService;

import javax.validation.constraints.NotBlank;
import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping(value = "/employees")
    public ResponseEntity<List<EmployeeDTO>> getEmployeesList() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(employeeService.findEmployeesDTOList());
    }

    @GetMapping(value = "/employeesByDepartmentId")
    public ResponseEntity<List<EmployeeDTO>> getEmployeesListByDepartmentId(@NotBlank @RequestParam(name = "departmentId") Long departmentId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(employeeService.findEmployeesDTOListByDepartmentId(departmentId));
    }

    @GetMapping(value = "/employee/{id}")
    public ResponseEntity<EmployeeFullDTO> getEmployee(@NotBlank @PathVariable("id") Long employeeId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(employeeService.findFullDTOById(employeeId));
    }

    @PostMapping(value = "/employees")
    public ResponseEntity<EmployeeWithCredentialsDTO> createEmployee(@RequestBody EmployeeWithCredentialsDTO employeeFullDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(employeeService.createEmployee(employeeFullDTO));
    }

    @PostMapping(value = "/employee/{id}/credentials")
    public ResponseEntity<EmployeeWithCredentialsDTO> changeCredentials(@NotBlank @PathVariable("id") Long employeeId, @RequestBody EmployeeWithCredentialsDTO employeeWithCredentialsDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(employeeService.changeCredentials(employeeId, employeeWithCredentialsDTO));
    }

    @PostMapping(value = "/employees/enable/{id}")
    public ResponseEntity<EmployeeFullDTO> enableEmployeeById(@NotBlank @PathVariable("id") Long employeeId) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(employeeService.setActive(employeeId, true));
    }

    @PostMapping(value = "/employees/disable/{id}")
    public ResponseEntity<EmployeeFullDTO> disableEmployeeById(@NotBlank @PathVariable("id") Long employeeId) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(employeeService.setActive(employeeId, true));
    }
}


