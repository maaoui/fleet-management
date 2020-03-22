package pl.buczak.kacper.fleetmanagement.service.department;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Region;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionFullDTO;
import pl.buczak.kacper.fleetmanagement.repository.department.RegionRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class RegionService {

    private RegionRepository regionRepository;

    private ModelMapper modelMapper;

    public RegionService(RegionRepository regionRepository, ModelMapper modelMapper) {
        this.regionRepository = regionRepository;
        this.modelMapper = modelMapper;
    }

    public List<RegionDTO> getRegionDTOList() {
        return regionRepository
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public RegionFullDTO getFullRegionById(Long id) {
        return regionRepository
                .findById(id)
                .map(this::entityToFullDTO)
                .get();
    }

    private RegionDTO entityToSimpleDTO(Region region) {
        RegionDTO regionDTO = modelMapper.map(region, RegionDTO.class);
        return regionDTO;
    }

    private RegionFullDTO entityToFullDTO(Region region) {
        RegionFullDTO regionFullDTO = modelMapper.map(region, RegionFullDTO.class);
        return regionFullDTO;
    }

}
