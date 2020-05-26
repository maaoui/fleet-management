package pl.buczak.kacper.fleetmanagement.controller.vehicle;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleFullDTO;
import pl.buczak.kacper.fleetmanagement.service.vehicle.VehicleService;

import javax.validation.constraints.NotBlank;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class VehicleController {

    private VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping(value = "/vehicles")
    public ResponseEntity<List<VehicleDTO>> getListOfVehicles() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findListOfVehicles());
    }

    @GetMapping(value = "/vehicle/{id}")
    public ResponseEntity<VehicleFullDTO> getVehicleById(@NotBlank @PathVariable("id") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findVehicleById(vehicleId));
    }

    @GetMapping(value = "/vehiclesByEmployeeId")
    public ResponseEntity<List<VehicleDTO>> getListOfVehiclesByEmployeeId(@NotBlank @RequestParam("employeeId") Long employeeId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findVehiclesByEmployeeId(employeeId));
    }

    @GetMapping(value = "/vehiclesByDepartmentId")
    public ResponseEntity<List<VehicleDTO>> getListOfVehiclesByDepartmentId(@NotBlank @RequestParam("departmentId") Long departmentId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findVehiclesByDepartmentId(departmentId));
    }

    @PutMapping(value = "/vehicle/{id}")
    public ResponseEntity<VehicleFullDTO> editVehicle(@NotBlank @PathVariable("id") Long vehicleId, @RequestBody VehicleFullDTO vehicle) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.editVehicle(vehicleId,vehicle));
    }

    @DeleteMapping(value = "/vehicle/{id}")
    public ResponseEntity<Void> deleteVehicleById(@NotBlank @PathVariable("id") Long vehicleId) {
        vehicleService.deleteVehicleById(vehicleId);
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .build();
    }
}
