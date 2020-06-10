package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "vehicle")
public class Vehicle extends BaseEntity {

    @OneToOne(cascade = CascadeType.REMOVE)
    private ExploatationReport exploatationReport;

    @OneToOne(cascade = CascadeType.REMOVE)
    private Insurance insurance;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "vehicle")
    private List<VehicleUsageTimestamp> vehicleUsageTimestamps;

    @OneToMany(cascade = CascadeType.REMOVE,mappedBy = "vehicle")
    private List<TechnicalExamination> technicalExaminationList;

    @OneToOne(cascade = CascadeType.REMOVE)
    private VehicleOwner vehicleOwner;

    @Size(max = 10)
    @Column(nullable = false, name = "plate_number")
    private String plateNumber;

    @Size(max = 20)
    @Column(nullable = false, name = "vin")
    private String VIN;

    @Size(max = 30)
    @Column(nullable = false, name = "make")
    private String make;

    @Size(max = 30)
    @Column(nullable = false, name = "model")
    private String model;

    @Column(nullable = false, name = "first_registration_date")
    private Date firstRegistration;

    @Min(value = 1900)
    @Max(value = Integer.MAX_VALUE)
    @Column(nullable = false, name = "year_of_production")
    private Integer yearOfProduction;

    @Min(value = 0)
    @Max(value = Integer.MAX_VALUE)
    @Column(nullable = false, name = "weight")
    private Integer weight;

    @Min(value = 0)
    @Max(value = Integer.MAX_VALUE)
    @Column(nullable = false, name = "horse_power")
    private Double horsePower;

    public Vehicle() {
    }

    public ExploatationReport getExploatationReport() {
        return exploatationReport;
    }

    public void setExploatationReport(ExploatationReport exploatationReport) {
        this.exploatationReport = exploatationReport;
    }

    public Insurance getInsurance() {
        return insurance;
    }

    public void setInsurance(Insurance insurance) {
        this.insurance = insurance;
    }

    public List<VehicleUsageTimestamp> getVehicleUsageTimestamps() {
        return vehicleUsageTimestamps;
    }

    public void setVehicleUsageTimestamps(List<VehicleUsageTimestamp> vehicleUsageTimestamps) {
        this.vehicleUsageTimestamps = vehicleUsageTimestamps;
    }

    public List<TechnicalExamination> getTechnicalExaminationList() {
        return technicalExaminationList;
    }

    public void setTechnicalExaminationList(List<TechnicalExamination> technicalExaminationList) {
        this.technicalExaminationList = technicalExaminationList;
    }

    public VehicleOwner getVehicleOwner() {
        return vehicleOwner;
    }

    public void setVehicleOwner(VehicleOwner vehicleOwner) {
        this.vehicleOwner = vehicleOwner;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getVIN() {
        return VIN;
    }

    public void setVIN(String VIN) {
        this.VIN = VIN;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Date getFirstRegistration() {
        return firstRegistration;
    }

    public void setFirstRegistration(Date firstRegistration) {
        this.firstRegistration = firstRegistration;
    }

    public Integer getYearOfProduction() {
        return yearOfProduction;
    }

    public void setYearOfProduction(Integer yearOfProduction) {
        this.yearOfProduction = yearOfProduction;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Double getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(Double horsePower) {
        this.horsePower = horsePower;
    }
}
