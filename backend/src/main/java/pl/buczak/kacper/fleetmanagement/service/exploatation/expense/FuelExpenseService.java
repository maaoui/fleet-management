package pl.buczak.kacper.fleetmanagement.service.exploatation.expense;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.FuelExpense;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.FuelExpenseDTO;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.ExploatationReportRepository;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.expense.FuelExpenseRepository;

/*
    @author Kacper Buczak 
*/
@Service
public class FuelExpenseService {
    private ModelMapper modelMapper;
    private FuelExpenseRepository fuelExpenseRepository;
    private ExploatationReportRepository exploatationReportRepository;

    public FuelExpenseService(ModelMapper modelMapper, FuelExpenseRepository fuelExpenseRepository, ExploatationReportRepository exploatationReportRepository) {
        this.modelMapper = modelMapper;
        this.fuelExpenseRepository = fuelExpenseRepository;
        this.exploatationReportRepository = exploatationReportRepository;
    }


    public FuelExpenseDTO createFuelExpense(FuelExpenseDTO fuelExpenseDTO, Long vehicleId) {
        ExploatationReport exploatationReport = exploatationReportRepository.getExploatationReportByVehicleId(vehicleId);
        return this.entityToDtoMapper(
                this.fuelExpenseRepository
                        .save(this.createFuelExpenseDao(exploatationReport, fuelExpenseDTO))
        );
    }

    public FuelExpenseDTO updateFuelExpense(FuelExpenseDTO fuelExpenseDTO) {
        FuelExpense fuelExpenseToUpdate = fuelExpenseRepository.getOne(fuelExpenseDTO.getId());
        return this.entityToDtoMapper(
                this.fuelExpenseRepository
                        .save(updateFuelExpense(fuelExpenseToUpdate, fuelExpenseDTO)));
    }

    private FuelExpense createFuelExpenseDao(ExploatationReport exploatationReport, FuelExpenseDTO fuelExpenseDTO) {
        FuelExpense fuelExpense = new FuelExpense();
        fuelExpense.setExploatationReport(exploatationReport);
        fuelExpense.setFuelAmount(fuelExpenseDTO.getFuelAmount());
        fuelExpense.setFuelType(fuelExpenseDTO.getFuelType());
        fuelExpense.setComment(fuelExpenseDTO.getComment());
        fuelExpense.setCurrency(fuelExpenseDTO.getCurrency());
        fuelExpense.setCurrentKilometrage(fuelExpenseDTO.getCurrentKilometrage());
        fuelExpense.setDate(fuelExpenseDTO.getDate());
        fuelExpense.setValue(fuelExpenseDTO.getValue());
        return fuelExpense;
    }

    private FuelExpense updateFuelExpense(FuelExpense fuelExpense, FuelExpenseDTO fuelExpenseDTO) {
        fuelExpense.setFuelAmount(fuelExpenseDTO.getFuelAmount());
        fuelExpense.setFuelType(fuelExpenseDTO.getFuelType());
        fuelExpense.setComment(fuelExpenseDTO.getComment());
        fuelExpense.setCurrency(fuelExpenseDTO.getCurrency());
        fuelExpense.setCurrentKilometrage(fuelExpenseDTO.getCurrentKilometrage());
        fuelExpense.setDate(fuelExpenseDTO.getDate());
        fuelExpense.setValue(fuelExpenseDTO.getValue());
        return fuelExpense;
    }

    public void deleteFuelExpense(Long expenseId) {
        this.fuelExpenseRepository.deleteById(expenseId);
    }


    private FuelExpenseDTO entityToDtoMapper(FuelExpense fuelExpense) {
        return modelMapper.map(fuelExpense, FuelExpenseDTO.class);
    }
}
