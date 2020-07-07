package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.ExploatationReportDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.insurance.InsuranceDTO;

import javax.validation.constraints.*;
import java.util.Date;
import java.util.List;

/*
    @author Kacper Buczak 
*/
public class VehicleFullDTO extends BaseDTO {

    private ExploatationReportDTO exploatationReport;

    private List<TechnicalExaminationDTO> technicalExaminationList;

    @NotNull
    private InsuranceDTO insurance;

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

    @PastOrPresent
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

    public VehicleFullDTO() {
    }

    public ExploatationReportDTO getExploatationReport() {
        return exploatationReport;
    }

    public void setExploatationReport(ExploatationReportDTO exploatationReport) {
        this.exploatationReport = exploatationReport;
    }

    public List<TechnicalExaminationDTO> getTechnicalExaminationList() {
        return technicalExaminationList;
    }

    public void setTechnicalExaminationList(List<TechnicalExaminationDTO> technicalExaminationList) {
        this.technicalExaminationList = technicalExaminationList;
    }

    public InsuranceDTO getInsurance() {
        return insurance;
    }

    public void setInsurance(InsuranceDTO insurance) {
        this.insurance = insurance;
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
