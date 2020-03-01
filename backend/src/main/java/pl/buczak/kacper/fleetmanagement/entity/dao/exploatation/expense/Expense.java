package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/*
    @author Kacper Buczak 
*/
@MappedSuperclass
public class Expense extends BaseEntity {

    private LocalDateTime expenseDate;
}
