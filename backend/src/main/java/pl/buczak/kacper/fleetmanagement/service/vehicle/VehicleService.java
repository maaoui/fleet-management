package pl.buczak.kacper.fleetmanagement.service.vehicle;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleFullDTO;
import pl.buczak.kacper.fleetmanagement.repository.employee.EmployeeRepository;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.ExploatationReportRepository;
import pl.buczak.kacper.fleetmanagement.repository.insurance.InsuranceRepository;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.VehicleRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/
@Service
public class VehicleService {

    private VehicleRepository vehicleReposiory;
    private EmployeeRepository employeeRepository;
    private ModelMapper modelMapper;
    private ExploatationReportRepository exploatationReportRepository;
    private InsuranceRepository insuranceRepository;

    public VehicleService(VehicleRepository vehicleReposiory, EmployeeRepository employeeRepository, ModelMapper modelMapper, ExploatationReportRepository exploatationReportRepository, InsuranceRepository insuranceRepository) {
        this.vehicleReposiory = vehicleReposiory;
        this.employeeRepository = employeeRepository;
        this.modelMapper = modelMapper;
        this.exploatationReportRepository = exploatationReportRepository;
        this.insuranceRepository = insuranceRepository;
    }


    public List<VehicleDTO> findListOfVehicles() {
        return vehicleReposiory
                .findAll()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public List<VehicleDTO> findVehiclesByEmployeeUsername(String employeeUsername) {
        return vehicleReposiory
                .findAllByEmployeeUsername(employeeUsername)
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

    @Transactional
    public VehicleFullDTO createVehicle(VehicleFullDTO vehicleFullDTO) {
        Vehicle vehicle = new Vehicle();
        modelMapper.map(vehicleFullDTO, vehicle);
        Insurance insuranceFromDto = vehicle.getInsurance();
        vehicle.setInsurance(null);
        vehicle.setTechnicalExaminationList(null);
        vehicle.setExploatationReport(null);
        Vehicle savedVehicle = this.vehicleReposiory.save(vehicle);

        Insurance insurance = new Insurance();
        modelMapper.map(insuranceFromDto, insurance);
        insurance.setVehicle(savedVehicle);
        savedVehicle.setInsurance(this.insuranceRepository.save(insurance));

        ExploatationReport exploatationReport = new ExploatationReport();
        exploatationReport.setVehicle(savedVehicle);
        savedVehicle.setExploatationReport(this.exploatationReportRepository.save(exploatationReport));


        return this.entityToFullDTO(this.vehicleReposiory.save(savedVehicle));
    }


    @Transactional
    public VehicleFullDTO editVehicle(VehicleFullDTO vehicleFullDTO) {
        this.vehicleReposiory.removeCurrentEmployeeFromAllVehicles(vehicleFullDTO.getCurrentEmployee().getId());
        Vehicle vehicleToEdit = this.vehicleReposiory.getOne(vehicleFullDTO.getId());
        modelMapper.map(modelMapper.map(vehicleFullDTO, Vehicle.class), vehicleToEdit);
        return entityToFullDTO(this.vehicleReposiory.save(vehicleToEdit));
    }

    public void deleteVehicleById(Long vehicleId) {
        this.vehicleReposiory.deleteById(vehicleId);
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
