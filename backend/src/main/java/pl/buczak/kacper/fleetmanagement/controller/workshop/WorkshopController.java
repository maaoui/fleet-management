package pl.buczak.kacper.fleetmanagement.controller.workshop;

/*
    @author Kacper Buczak 
*/

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

    @GetMapping(value = "/workshops")
    public ResponseEntity<List<WorkshopDTO>> getListOfWorkshops() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(workshopService.findListOfWorkshops());
    }


    @GetMapping(value = "workshop/{id}")
    public ResponseEntity<WorkshopDTO> getWorkshopById(@NotBlank @PathVariable("id") Long workshopId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(workshopService.findWorkshopById(workshopId));
    }


}
