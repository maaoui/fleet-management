package pl.buczak.kacper.fleetmanagement.controller.exploatation.expense;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.FuelExpenseDTO;
import pl.buczak.kacper.fleetmanagement.service.exploatation.expense.FuelExpenseService;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class FuelExpenseController {
    private FuelExpenseService fuelExpenseService;

    public FuelExpenseController(FuelExpenseService fuelExpenseService) {
        this.fuelExpenseService = fuelExpenseService;
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @PostMapping("/fuelExpense/{vehicleId}")
    public ResponseEntity<FuelExpenseDTO> createFuelExpense(@RequestBody FuelExpenseDTO fuelExpenseDTO, @PathVariable("vehicleId") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(fuelExpenseService.createFuelExpense(fuelExpenseDTO, vehicleId));
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @PutMapping("/fuelExpense")
    public ResponseEntity<FuelExpenseDTO> updateFuelExpense(@RequestBody FuelExpenseDTO fuelExpenseDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(fuelExpenseService.updateFuelExpense(fuelExpenseDTO));
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/fuelExpense/{expenseId}")
    public ResponseEntity<Void> deleteFuelExpenseById(@PathVariable("expenseId") Long expenseId) {
        fuelExpenseService.deleteFuelExpense(expenseId);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }

}
