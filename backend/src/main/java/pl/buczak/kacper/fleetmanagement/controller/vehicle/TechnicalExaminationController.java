package pl.buczak.kacper.fleetmanagement.controller.vehicle;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.TechnicalExaminationDTO;
import pl.buczak.kacper.fleetmanagement.service.vehicle.TechnicalExaminationService;

import javax.validation.constraints.NotBlank;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class TechnicalExaminationController {
    private TechnicalExaminationService technicalExaminationService;

    public TechnicalExaminationController(TechnicalExaminationService technicalExaminationService) {
        this.technicalExaminationService = technicalExaminationService;
    }

    @GetMapping(value = "/technicalExaminations")
    public ResponseEntity<List<TechnicalExaminationDTO>> getTechnicalExaminationsSortedByDate() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(technicalExaminationService.getAllTechnicalExaminationsSortedByDate());
    }

    @GetMapping(value = "/technicalExaminationsByEmployee")
    public ResponseEntity<List<TechnicalExaminationDTO>> getTechnicalExaminationsByEmployee() {
        User userDetails = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(technicalExaminationService.getAllTechnicalExaminationsForEmployeeSortedByDate(userDetails.getUsername()));
    }

    @GetMapping(value = "/technicalExaminations/{id}")
    public ResponseEntity<List<TechnicalExaminationDTO>> getTechnicalExaminationsByVehicleId(@NotBlank @PathVariable("id") Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(technicalExaminationService.getTechnicalExaminationsByVehicleId(id));
    }

    @PostMapping(value = "/technicalExaminations")
    public ResponseEntity<TechnicalExaminationDTO> createTechnicalExamination(@RequestBody TechnicalExaminationDTO technicalExaminationDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(technicalExaminationService.createTechnicalExamination(technicalExaminationDTO));
    }

    @PutMapping(value = "/technicalExaminations/{id}")
    public ResponseEntity<TechnicalExaminationDTO> updateTechnicalExamination(@NotBlank @PathVariable("id") Long id,
                                                                                       @RequestBody TechnicalExaminationDTO technicalExaminationDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(technicalExaminationService.editTechnicalExamination(technicalExaminationDTO));
    }

    @DeleteMapping(value = "/technicalExaminations/{id}")
    public ResponseEntity<Void> deleteTechnicalExaminationById(@NotBlank @PathVariable("id") Long id) {
        technicalExaminationService.deleteTechnicalExamination(id);
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .build();
    }

}
