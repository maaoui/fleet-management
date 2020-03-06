package pl.buczak.kacper.fleetmanagement.repository.exploatation.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.OtherExpense;

/*
    @author Kacper Buczak 
*/
@Repository
public interface OtherExpenseRepository extends JpaRepository<OtherExpense, Long> {
}
