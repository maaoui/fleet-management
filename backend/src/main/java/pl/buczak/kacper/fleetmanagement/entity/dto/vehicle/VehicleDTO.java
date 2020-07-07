package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;

import javax.validation.constraints.*;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
public class VehicleDTO extends BaseDTO {

    private EmployeeDTO currentEmployee;

    @NotBlank
    @Size(max = 10)
    private String plateNumber;

    @NotBlank
    @Size(max = 20)
    private String VIN;

    @NotBlank
    @Size(max = 30)
    private String make;

    @NotBlank
    @Size(max = 30)
    private String model;

    private Date firstRegistration;

    @NotNull
    @Min(value = 1900)
    @Max(value = Integer.MAX_VALUE)
    private Integer yearOfProduction;

    @NotNull
    @Min(value = 0)
    @Max(value = Integer.MAX_VALUE)
    private Integer weight;

    @NotNull
    @Min(value = 0)
    @Max(value = 5000)
    private Double horsePower;

    public EmployeeDTO getCurrentEmployee() {
        return currentEmployee;
    }

    public void setCurrentEmployee(EmployeeDTO currentEmployee) {
        this.currentEmployee = currentEmployee;
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

    public Double getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(Double horsePower) {
        this.horsePower = horsePower;
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
}
