package pl.buczak.kacper.fleetmanagement.controller.vehicle;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
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

    @Secured("ROLE_ADMIN")
    @GetMapping(value = "/vehicles")
    public ResponseEntity<List<VehicleDTO>> getListOfVehicles() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findListOfVehicles());
    }


    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @GetMapping(value = "/vehicle/{id}")
    public ResponseEntity<VehicleFullDTO> getVehicleById(@NotBlank @PathVariable("id") Long vehicleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findVehicleById(vehicleId));
    }


    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @GetMapping(value = "/vehiclesByEmployeeId")
    public ResponseEntity<List<VehicleDTO>> getListOfVehiclesByEmployeeId() {
        User userDetails = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findVehiclesByEmployeeUsername(userDetails.getUsername()));
    }

    @Secured("ROLE_ADMIN")
    @GetMapping(value = "/vehiclesByDepartmentId")
    public ResponseEntity<List<VehicleDTO>> getListOfVehiclesByDepartmentId(@NotBlank @RequestParam("departmentId") Long departmentId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(vehicleService.findVehiclesByDepartmentId(departmentId));
    }

    @Secured("ROLE_ADMIN")
    @PostMapping(value = "/vehicles")
    public ResponseEntity<VehicleFullDTO> createVehicle(@RequestBody VehicleFullDTO vehicle) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(vehicleService.createVehicle(vehicle));
    }


    @Secured("ROLE_ADMIN")
    @PutMapping(value = "/vehicle/{id}")
    public ResponseEntity<VehicleFullDTO> editVehicle(@NotBlank @PathVariable("id") Long vehicleId, @RequestBody VehicleFullDTO vehicle) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(vehicleService.editVehicle(vehicle));
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping(value = "/vehicle/{id}")
    public ResponseEntity<Void> deleteVehicleById(@NotBlank @PathVariable("id") Long vehicleId) {
        vehicleService.deleteVehicleById(vehicleId);
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .build();
    }
}
