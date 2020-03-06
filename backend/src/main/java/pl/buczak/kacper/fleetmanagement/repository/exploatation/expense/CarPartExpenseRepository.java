package pl.buczak.kacper.fleetmanagement.repository.exploatation.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.CarPartExpense;

/*
    @author Kacper Buczak 
*/
public interface CarPartExpenseRepository extends JpaRepository<CarPartExpense, Long> {
}
