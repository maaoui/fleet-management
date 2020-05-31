package pl.buczak.kacper.fleetmanagement.service.exploatation.expense;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.ServiceExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.ServiceExpenseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.CarPartDTO;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.ExploatationReportRepository;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.expense.ServiceExpenseRepository;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.CarPartRepository;
import pl.buczak.kacper.fleetmanagement.repository.workshop.WorkshopRepository;

/*
    @author Kacper Buczak 
*/
@Service
public class ServiceExpenseService {
    private ModelMapper modelMapper;
    private ServiceExpenseRepository serviceExpenseRepository;
    private ExploatationReportRepository exploatationReportRepository;
    private WorkshopRepository workshopRepository;
    private CarPartRepository carPartRepository;

    public ServiceExpenseService(ModelMapper modelMapper,
                                 ServiceExpenseRepository serviceExpenseRepository,
                                 ExploatationReportRepository exploatationReportRepository,
                                 WorkshopRepository workshopRepository,
                                 CarPartRepository carPartRepository) {
        this.modelMapper = modelMapper;
        this.serviceExpenseRepository = serviceExpenseRepository;
        this.exploatationReportRepository = exploatationReportRepository;
        this.workshopRepository = workshopRepository;
        this.carPartRepository = carPartRepository;
    }

    public ServiceExpenseDTO createServiceExpense(ServiceExpenseDTO serviceExpenseDTO, Long vehicleId) {
        ExploatationReport exploatationReport = exploatationReportRepository.getExploatationReportByVehicleId(vehicleId);
        Workshop workshop = workshopRepository.getOne(serviceExpenseDTO.getWorkshop().getId());
        CarPart carPart = carPartRepository.save(this.createCarPartFromDto(serviceExpenseDTO.getCarPart()));
        return this.entityToDtoMapper(
                this.serviceExpenseRepository
                        .save(createServiceExpense(serviceExpenseDTO, exploatationReport, workshop, carPart)));
    }

    public ServiceExpenseDTO updateServiceExpense(ServiceExpenseDTO serviceExpenseDTO) {
        ServiceExpense serviceExpenseToUpdate = serviceExpenseRepository.getOne(serviceExpenseDTO.getId());
        Workshop workshop = workshopRepository.getOne(serviceExpenseDTO.getWorkshop().getId());
        CarPart carPart = carPartRepository.save(this.createCarPartFromDto(serviceExpenseDTO.getCarPart()));
        return this.entityToDtoMapper(
                this.serviceExpenseRepository.save(
                        updateServiceExpense(serviceExpenseToUpdate, serviceExpenseDTO, workshop, carPart)
                )
        );
    }

    public void deleteServiceExpense(Long expenseId) {
        this.serviceExpenseRepository.deleteById(expenseId);
    }

    private CarPart createCarPartFromDto(CarPartDTO carPartDTO) {
        CarPart carPart = new CarPart();
        carPart.setId(carPartDTO.getId());
        carPart.setPartType(carPartDTO.getPartType());
        carPart.setName(carPartDTO.getName());
        carPart.setDescription(carPartDTO.getDescription());
        return carPart;
    }

    private ServiceExpense createServiceExpense(ServiceExpenseDTO serviceExpenseDTO, ExploatationReport exploatationReport, Workshop workshop, CarPart carPart) {
        ServiceExpense serviceExpense = new ServiceExpense();
        serviceExpense.setExploatationReport(exploatationReport);
        serviceExpense.setWorkshop(workshop);
        serviceExpense.setCarPart(carPart);
        serviceExpense.setComment(serviceExpenseDTO.getComment());
        serviceExpense.setCurrency(serviceExpenseDTO.getCurrency());
        serviceExpense.setCurrentKilometrage(serviceExpenseDTO.getCurrentKilometrage());
        serviceExpense.setDate(serviceExpenseDTO.getDate());
        serviceExpense.setValue(serviceExpenseDTO.getValue());
        return serviceExpense;
    }

    private ServiceExpense updateServiceExpense(ServiceExpense serviceExpense, ServiceExpenseDTO serviceExpenseDTO, Workshop workshop, CarPart carPart) {
        serviceExpense.setWorkshop(workshop);
        serviceExpense.setCarPart(carPart);
        serviceExpense.setComment(serviceExpenseDTO.getComment());
        serviceExpense.setCurrency(serviceExpenseDTO.getCurrency());
        serviceExpense.setCurrentKilometrage(serviceExpenseDTO.getCurrentKilometrage());
        serviceExpense.setDate(serviceExpenseDTO.getDate());
        serviceExpense.setValue(serviceExpenseDTO.getValue());
        return serviceExpense;
    }

    private ServiceExpenseDTO entityToDtoMapper(ServiceExpense serviceExpense) {
        return modelMapper.map(serviceExpense, ServiceExpenseDTO.class);
    }
}
