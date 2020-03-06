package pl.buczak.kacper.fleetmanagement.repository.exploatation.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.CarPartExpense;

/*
    @author Kacper Buczak 
*/
@Repository
public interface CarPartExpenseRepository extends JpaRepository<CarPartExpense, Long> {
}
