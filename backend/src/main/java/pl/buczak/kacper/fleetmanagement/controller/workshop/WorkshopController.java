package pl.buczak.kacper.fleetmanagement.controller.workshop;

/*
    @author Kacper Buczak 
*/

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.workshop.WorkshopDTO;
import pl.buczak.kacper.fleetmanagement.service.workshop.WorkshopService;

import javax.validation.constraints.NotBlank;
import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class WorkshopController {

    private WorkshopService workshopService;

    public WorkshopController(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @Secured("ROLE_ADMIN")
    @GetMapping(value = "/workshops")
    public ResponseEntity<List<WorkshopDTO>> getListOfWorkshops() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(workshopService.findListOfWorkshops());
    }

    @Secured("ROLE_ADMIN")
    @PostMapping(value = "/workshops")
    public ResponseEntity<WorkshopDTO> createWorkshop(@RequestBody WorkshopDTO workshopDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(workshopService.createWorkshop(workshopDTO));
    }

    @Secured("ROLE_ADMIN")
    @PutMapping(value = "/workshop/{id}")
    public ResponseEntity<WorkshopDTO> updateWorkshop(@NotBlank @PathVariable("id") Long vehicleId,
                                                      @RequestBody WorkshopDTO workshopDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(workshopService.updateWorkshop(workshopDTO));
    }


}
