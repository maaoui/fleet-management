package pl.buczak.kacper.fleetmanagement.service.workshop;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.AddressDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.workshop.WorkshopDTO;
import pl.buczak.kacper.fleetmanagement.repository.department.AddressRepository;
import pl.buczak.kacper.fleetmanagement.repository.department.RegionRepository;
import pl.buczak.kacper.fleetmanagement.repository.workshop.WorkshopRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class WorkshopService {

    private WorkshopRepository workshopRepository;
    private RegionRepository regionRepository;
    private AddressRepository addressRepository;
    private ModelMapper modelMapper;


    public WorkshopService(WorkshopRepository workshopRepository,
                           RegionRepository regionRepository,
                           AddressRepository addressRepository,
                           ModelMapper modelMapper) {
        this.workshopRepository = workshopRepository;
        this.regionRepository = regionRepository;
        this.addressRepository = addressRepository;
        this.modelMapper = modelMapper;
    }

    public List<WorkshopDTO> findListOfWorkshops() {
        return workshopRepository
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public WorkshopDTO createWorkshop(WorkshopDTO workshopDTO) {
        Workshop workshop = dtoToWorkshopEntityMapper(workshopDTO);
        Address address = dtoToAddressEntityMapper(workshopDTO.getAddress());
        workshop.setAddress(addressRepository.save(address));
        workshop.setRegion(regionRepository.getOne(workshopDTO.getRegion().getId()));
        return entityToSimpleDTO(workshopRepository.save(workshop));
    }

    public WorkshopDTO updateWorkshop(WorkshopDTO workshopDTO) {
        return null;
    }

    private WorkshopDTO entityToSimpleDTO(Workshop workshop) {
        WorkshopDTO workshopDTO = modelMapper.map(workshop, WorkshopDTO.class);
        return workshopDTO;
    }

    private Workshop dtoToWorkshopEntityMapper(WorkshopDTO workshopDTO) {
        Workshop workshop = modelMapper.map(workshopDTO, Workshop.class);
        return workshop;
    }

    private Address dtoToAddressEntityMapper(AddressDTO addressDTO) {
        Address address = modelMapper.map(addressDTO, Address.class);
        return address;
    }

}
