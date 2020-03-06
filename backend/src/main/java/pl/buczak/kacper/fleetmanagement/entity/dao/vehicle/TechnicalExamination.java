package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "technical_examination")
public class TechnicalExamination extends BaseEntity {

    @ManyToOne
    private Vehicle vehicle;

    @Column(nullable = false, name = "next_examination_date")
    private LocalDateTime nextExaminationDate;

    @Column(nullable = false, name = "current_kilometrage")
    private Integer currentKilometrage;

    @Size(max = 512)
    @Column(nullable = false, name = "comment")
    private String comment;

    public TechnicalExamination() {
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public LocalDateTime getNextExaminationDate() {
        return nextExaminationDate;
    }

    public void setNextExaminationDate(LocalDateTime nextExaminationDate) {
        this.nextExaminationDate = nextExaminationDate;
    }

    public Integer getCurrentKilometrage() {
        return currentKilometrage;
    }

    public void setCurrentKilometrage(Integer currentKilometrage) {
        this.currentKilometrage = currentKilometrage;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
