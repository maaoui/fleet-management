package pl.buczak.kacper.fleetmanagement.service.exploatation.expense;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.CarPartExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.CarPartExpenseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.CarPartDTO;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.ExploatationReportRepository;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.expense.CarPartExpenseRepository;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.CarPartRepository;

/*
    @author Kacper Buczak 
*/
@Service
public class CarPartExpenseService {
    private ModelMapper modelMapper;
    private CarPartExpenseRepository carPartExpenseRepository;
    private ExploatationReportRepository exploatationReportRepository;
    private CarPartRepository carPartRepository;

    public CarPartExpenseService(ModelMapper modelMapper, CarPartExpenseRepository carPartExpenseRepository, ExploatationReportRepository exploatationReportRepository, CarPartRepository carPartRepository) {
        this.modelMapper = modelMapper;
        this.carPartExpenseRepository = carPartExpenseRepository;
        this.exploatationReportRepository = exploatationReportRepository;
        this.carPartRepository = carPartRepository;
    }

    public CarPartExpenseDTO createCarPartExpense(CarPartExpenseDTO carPartExpenseDTO, Long vehicleId) {
        ExploatationReport exploatationReport = exploatationReportRepository.getExploatationReportByVehicleId(vehicleId);
        CarPart carPart = carPartRepository.save(this.createCarPartFromDto(carPartExpenseDTO.getCarPart()));
        return this.entityToDtoMapper(this.carPartExpenseRepository.save(createCarPartExpenseDao(exploatationReport, carPart, carPartExpenseDTO)));
    }

    public CarPartExpenseDTO updateCarPartExpense(CarPartExpenseDTO carPartExpenseDTO) {
        CarPartExpense carPartExpenseToUpdate = carPartExpenseRepository.getOne(carPartExpenseDTO.getId());
        return this.entityToDtoMapper(this.carPartExpenseRepository.save(updateCarPartExpense(carPartExpenseToUpdate, carPartExpenseDTO)));
    }

    public void deleteCarPartExpenseById(Long expenseId) {
        this.carPartExpenseRepository.deleteById(expenseId);
    }


    private CarPartExpense createCarPartExpenseDao(ExploatationReport exploatationReport, CarPart carPart, CarPartExpenseDTO carPartExpenseDTO) {
        CarPartExpense carPartExpense = new CarPartExpense();
        carPartExpense.setExploatationReport(exploatationReport);
        carPartExpense.setCarPart(carPart);
        carPartExpense.setValue(carPartExpenseDTO.getValue());
        carPartExpense.setDate(carPartExpenseDTO.getDate());
        carPartExpense.setCurrentKilometrage(carPartExpenseDTO.getCurrentKilometrage());
        carPartExpense.setCurrency(carPartExpenseDTO.getCurrency());
        carPartExpense.setComment(carPartExpenseDTO.getComment());
        return carPartExpense;
    }

    private CarPartExpense updateCarPartExpense(CarPartExpense carPartExpense, CarPartExpenseDTO carPartExpenseDTO) {
        carPartExpense.setCarPart(this.createCarPartFromDto(carPartExpenseDTO.getCarPart()));
        carPartExpense.setComment(carPartExpenseDTO.getComment());
        carPartExpense.setCurrency(carPartExpenseDTO.getCurrency());
        carPartExpense.setCurrentKilometrage(carPartExpenseDTO.getCurrentKilometrage());
        carPartExpense.setDate(carPartExpenseDTO.getDate());
        carPartExpense.setValue(carPartExpenseDTO.getValue());
        carPartExpense.setComment(carPartExpenseDTO.getComment());
        return carPartExpense;
    }

    private CarPart createCarPartFromDto(CarPartDTO carPartDTO) {
        CarPart carPart = new CarPart();
        carPart.setPartType(carPartDTO.getPartType());
        carPart.setName(carPartDTO.getName());
        carPart.setDescription(carPartDTO.getDescription());
        return carPart;
    }


    private CarPartExpenseDTO entityToDtoMapper(CarPartExpense carPartExpense) {
        return modelMapper.map(carPartExpense, CarPartExpenseDTO.class);
    }

}
