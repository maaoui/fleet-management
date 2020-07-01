package pl.buczak.kacper.fleetmanagement.service.workshop;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;
import pl.buczak.kacper.fleetmanagement.entity.dto.workshop.WorkshopDTO;
import pl.buczak.kacper.fleetmanagement.repository.workshop.WorkshopRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class WorkshopService {

    private WorkshopRepository workshopRepository;

    private ModelMapper modelMapper;


    public WorkshopService(WorkshopRepository workshopRepository, ModelMapper modelMapper) {
        this.workshopRepository = workshopRepository;
        this.modelMapper = modelMapper;
    }

    public List<WorkshopDTO> findListOfWorkshops() {
        return workshopRepository
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    private WorkshopDTO entityToSimpleDTO(Workshop workshop) {
        WorkshopDTO workshopDTO = modelMapper.map(workshop, WorkshopDTO.class);
        return workshopDTO;
    }
}
