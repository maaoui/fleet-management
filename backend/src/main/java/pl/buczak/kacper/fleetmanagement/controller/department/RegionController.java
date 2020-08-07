package pl.buczak.kacper.fleetmanagement.controller.department;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionFullDTO;
import pl.buczak.kacper.fleetmanagement.service.department.RegionService;

import javax.validation.constraints.NotBlank;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class RegionController {

    private RegionService regionService;

    public RegionController(RegionService regionService) {
        this.regionService = regionService;
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @GetMapping(value = "/regions")
    public ResponseEntity<List<RegionDTO>> getRegionsList() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(regionService.getRegionDTOList());
    }

    @Secured({"ROLE_ADMIN", "ROLE_EMPLOYEE"})
    @GetMapping(value = "/region/{id}")
    public ResponseEntity<RegionFullDTO> getRegionFullInformation(@NotBlank @PathVariable("id") Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(regionService.getFullRegionById(id));
    }

}
