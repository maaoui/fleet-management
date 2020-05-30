package pl.buczak.kacper.fleetmanagement.controller.exploatation.expense;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/fuelExpense/{vehicleId}")
    public ResponseEntity<FuelExpenseDTO> createFuelExpense(@RequestBody FuelExpenseDTO fuelExpenseDTO, @PathVariable("vehicleId") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(fuelExpenseService.createFuelExpense(fuelExpenseDTO, vehicleId));
    }

    @PutMapping("/fuelExpense")
    public ResponseEntity<FuelExpenseDTO> updateFuelExpense(@RequestBody FuelExpenseDTO fuelExpenseDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(fuelExpenseService.updateFuelExpense(fuelExpenseDTO));
    }

    @DeleteMapping("/fuelExpense/{expenseId}")
    public ResponseEntity<Void> deleteFuelExpenseById(@PathVariable("expenseId") Long expenseId) {
        fuelExpenseService.deleteFuelExpense(expenseId);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }

}
