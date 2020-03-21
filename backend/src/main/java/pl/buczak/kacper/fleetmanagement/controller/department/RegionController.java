package pl.buczak.kacper.fleetmanagement.controller.department;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionDTO;
import pl.buczak.kacper.fleetmanagement.service.department.RegionService;

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

    @GetMapping(value = "/regions")
    public ResponseEntity<List<RegionDTO>> getRegionsList() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(regionService.getRegionDTOList());
    }

}
