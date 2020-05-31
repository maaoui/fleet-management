package pl.buczak.kacper.fleetmanagement.service.exploatation.expense;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.OtherExpense;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.OtherExpenseDTO;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.ExploatationReportRepository;
import pl.buczak.kacper.fleetmanagement.repository.exploatation.expense.OtherExpenseRepository;

/*
    @author Kacper Buczak 
*/
@Service
public class OtherExpenseService {
    private ModelMapper modelMapper;
    private OtherExpenseRepository otherExpenseRepository;
    private ExploatationReportRepository exploatationReportRepository;

    public OtherExpenseService(ModelMapper modelMapper, OtherExpenseRepository otherExpenseRepository, ExploatationReportRepository exploatationReportRepository) {
        this.modelMapper = modelMapper;
        this.otherExpenseRepository = otherExpenseRepository;
        this.exploatationReportRepository = exploatationReportRepository;
    }

    public OtherExpenseDTO createOtherExpense(OtherExpenseDTO otherExpenseDTO, Long vehicleId) {
        ExploatationReport exploatationReport = exploatationReportRepository.getExploatationReportByVehicleId(vehicleId);
        return this.entityToDtoMapper(
                this.otherExpenseRepository
                        .save(this.createOtherExpense(exploatationReport, otherExpenseDTO))
        );
    }

    public OtherExpenseDTO updateOtherExpense(OtherExpenseDTO otherExpenseDTO) {
        OtherExpense otherExpenseToUpdate = otherExpenseRepository.getOne(otherExpenseDTO.getId());
        return this.entityToDtoMapper(
                this.otherExpenseRepository
                        .save(updateOtherExpense(otherExpenseToUpdate, otherExpenseDTO))
        );
    }

    public void deleteOtherExpense(Long expenseId) {
        this.otherExpenseRepository.deleteById(expenseId);
    }

    private OtherExpense createOtherExpense(ExploatationReport exploatationReport, OtherExpenseDTO otherExpenseDTO) {
        OtherExpense otherExpense = new OtherExpense();
        otherExpense.setExploatationReport(exploatationReport);
        otherExpense.setItemCount(otherExpenseDTO.getItemCount());
        otherExpense.setComment(otherExpenseDTO.getComment());
        otherExpense.setCurrency(otherExpenseDTO.getCurrency());
        otherExpense.setCurrentKilometrage(otherExpenseDTO.getCurrentKilometrage());
        otherExpense.setDate(otherExpenseDTO.getDate());
        otherExpense.setValue(otherExpenseDTO.getValue());
        return otherExpense;
    }

    private OtherExpense updateOtherExpense(OtherExpense otherExpense, OtherExpenseDTO otherExpenseDTO) {
        otherExpense.setItemCount(otherExpenseDTO.getItemCount());
        otherExpense.setComment(otherExpenseDTO.getComment());
        otherExpense.setCurrency(otherExpenseDTO.getCurrency());
        otherExpense.setCurrentKilometrage(otherExpenseDTO.getCurrentKilometrage());
        otherExpense.setDate(otherExpenseDTO.getDate());
        otherExpense.setValue(otherExpenseDTO.getValue());
        return otherExpense;
    }


    private OtherExpenseDTO entityToDtoMapper(OtherExpense otherExpense) {
        return modelMapper.map(otherExpense, OtherExpenseDTO.class);
    }
}
