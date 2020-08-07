package pl.buczak.kacper.fleetmanagement.controller.exploatation.expense;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.OtherExpenseDTO;
import pl.buczak.kacper.fleetmanagement.service.exploatation.expense.OtherExpenseService;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class OtherExpenseController {
    private OtherExpenseService otherExpenseService;

    public OtherExpenseController(OtherExpenseService otherExpenseService) {
        this.otherExpenseService = otherExpenseService;
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @PostMapping("/otherExpense/{vehicleId}")
    public ResponseEntity<OtherExpenseDTO> createOtherExpense(@RequestBody OtherExpenseDTO otherExpenseDTO, @PathVariable("vehicleId") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(otherExpenseService.createOtherExpense(otherExpenseDTO, vehicleId));
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @PutMapping("/otherExpense")
    public ResponseEntity<OtherExpenseDTO> updateOtherExpense(@RequestBody OtherExpenseDTO otherExpenseDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(otherExpenseService.updateOtherExpense(otherExpenseDTO));
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/otherExpense/{expenseId}")
    public ResponseEntity<Void> deleteOtherExpenseById(@PathVariable("expenseId") Long expenseId) {
        otherExpenseService.deleteOtherExpense(expenseId);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }
}
