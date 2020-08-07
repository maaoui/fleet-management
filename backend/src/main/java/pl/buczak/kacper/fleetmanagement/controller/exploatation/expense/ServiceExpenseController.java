package pl.buczak.kacper.fleetmanagement.controller.exploatation.expense;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.ServiceExpenseDTO;
import pl.buczak.kacper.fleetmanagement.service.exploatation.expense.ServiceExpenseService;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class ServiceExpenseController {
    private ServiceExpenseService serviceExpenseService;

    public ServiceExpenseController(ServiceExpenseService serviceExpenseService) {
        this.serviceExpenseService = serviceExpenseService;
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @PostMapping("/serviceExpense/{vehicleId}")
    public ResponseEntity<ServiceExpenseDTO> createServiceExpense(@RequestBody ServiceExpenseDTO serviceExpenseDTO, @PathVariable("vehicleId") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(serviceExpenseService.createServiceExpense(serviceExpenseDTO, vehicleId));
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @PutMapping("/serviceExpense")
    public ResponseEntity<ServiceExpenseDTO> updateServiceExpense(@RequestBody ServiceExpenseDTO serviceExpenseDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(serviceExpenseService.updateServiceExpense(serviceExpenseDTO));
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/serviceExpense/{expenseId}")
    public ResponseEntity<Void> deleteServiceExpenseById(@PathVariable("expenseId") Long expenseId) {
        serviceExpenseService.deleteServiceExpense(expenseId);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }

}
