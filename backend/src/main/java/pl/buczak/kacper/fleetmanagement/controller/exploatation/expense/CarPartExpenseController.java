package pl.buczak.kacper.fleetmanagement.controller.exploatation.expense;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.CarPartExpenseDTO;
import pl.buczak.kacper.fleetmanagement.service.exploatation.expense.CarPartExpenseService;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class CarPartExpenseController {

    private CarPartExpenseService carPartExpenseService;

    public CarPartExpenseController(CarPartExpenseService carPartExpenseService) {
        this.carPartExpenseService = carPartExpenseService;
    }

    @PostMapping("/carPartExpense/{vehicleId}")
    public ResponseEntity<CarPartExpenseDTO> createCarPartExpense(@RequestBody CarPartExpenseDTO carPartExpenseDTO, @PathVariable("vehicleId") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(carPartExpenseService.createCarPartExpense(carPartExpenseDTO, vehicleId));
    }

    @PutMapping("/carPartExpense")
    public ResponseEntity<CarPartExpenseDTO> updateCarPartExpense(@RequestBody CarPartExpenseDTO carPartExpenseDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(carPartExpenseService.updateCarPartExpense(carPartExpenseDTO));
    }

    @DeleteMapping("/carPartExpense/{expenseId}")
    public ResponseEntity<Void> deleteCarPartExpenseById(@PathVariable("expenseId") Long expenseId) {
        carPartExpenseService.deleteCarPartExpenseById(expenseId);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }
}
