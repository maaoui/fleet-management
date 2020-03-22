package pl.buczak.kacper.fleetmanagement.service.vehicle;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleFullDTO;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.VehicleReposiory;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class VehicleService {

    private VehicleReposiory vehicleReposiory;

    private ModelMapper modelMapper;

    public VehicleService(VehicleReposiory vehicleReposiory, ModelMapper modelMapper) {
        this.vehicleReposiory = vehicleReposiory;
        this.modelMapper = modelMapper;
    }

    public List<VehicleDTO> findListOfVehicles() {
        return vehicleReposiory
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public List<VehicleDTO> findVehiclesByEmployeeId(Long employeeId) {
        return vehicleReposiory
                .findAllByEmployeeId(employeeId)
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public List<VehicleDTO> findVehiclesByDepartmentId(Long departmentId) {
        return vehicleReposiory
                .findAllByDepartmentId(departmentId)
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public VehicleFullDTO findVehicleById(Long id) {
        return vehicleReposiory
                .findById(id)
                .map(this::entityToFullDTO)
                .get();
    }


    private VehicleDTO entityToSimpleDTO(Vehicle vehicle) {
        VehicleDTO vehicleDTO = modelMapper.map(vehicle, VehicleDTO.class);
        return vehicleDTO;
    }

    private VehicleFullDTO entityToFullDTO(Vehicle vehicle) {
        VehicleFullDTO vehicleFullDTO = modelMapper.map(vehicle, VehicleFullDTO.class);
        return vehicleFullDTO;
    }


}
