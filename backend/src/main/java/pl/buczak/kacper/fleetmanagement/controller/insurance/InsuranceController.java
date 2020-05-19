package pl.buczak.kacper.fleetmanagement.controller.insurance;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.insurance.InsuranceDTO;
import pl.buczak.kacper.fleetmanagement.service.insurance.InsuranceService;

import javax.validation.constraints.NotBlank;

/*
    @author Kacper Buczak 
*/
@CrossOrigin
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class InsuranceController {

    private InsuranceService insuranceService;

    public InsuranceController(InsuranceService insuranceService) {
        this.insuranceService = insuranceService;
    }

    @GetMapping(value = "/insurance")
    public ResponseEntity<InsuranceDTO> getInsuranceByVehicleId(@RequestParam(value = "id") @NotBlank Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(insuranceService.findInsuranceByVehicleId(vehicleId));
    }
    @PutMapping(value = "/insurance")
    public ResponseEntity<InsuranceDTO> getInsuranceByVehicleId(@RequestBody InsuranceDTO insuranceDTO) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(insuranceService.updateInsurance(insuranceDTO));
    }

}
