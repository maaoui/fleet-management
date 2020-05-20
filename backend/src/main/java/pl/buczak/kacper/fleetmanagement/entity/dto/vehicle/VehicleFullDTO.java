package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import com.fasterxml.jackson.annotation.JsonFormat;
import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.ExploatationReportDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.repair.RecommendedRepairDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.insurance.InsuranceDTO;

import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.List;

/*
    @author Kacper Buczak 
*/
public class VehicleFullDTO extends BaseDTO {

    private ExploatationReportDTO exploatationReport;

    private List<VehicleUsageTimestampDTO> vehicleUsageTimestamps;

    private List<RecommendedRepairDTO> recommendedRepairs;

    private List<TechnicalExaminationDTO> technicalExaminationList;

    @NotNull
    private InsuranceDTO insurance;

    @NotNull
    private VehicleOwnerDTO vehicleOwner;

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
    private LocalDateTime firstRegistration;

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

    public List<VehicleUsageTimestampDTO> getVehicleUsageTimestamps() {
        return vehicleUsageTimestamps;
    }

    public void setVehicleUsageTimestamps(List<VehicleUsageTimestampDTO> vehicleUsageTimestamps) {
        this.vehicleUsageTimestamps = vehicleUsageTimestamps;
    }

    public List<RecommendedRepairDTO> getRecommendedRepairs() {
        return recommendedRepairs;
    }

    public void setRecommendedRepairs(List<RecommendedRepairDTO> recommendedRepairs) {
        this.recommendedRepairs = recommendedRepairs;
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

    public VehicleOwnerDTO getVehicleOwner() {
        return vehicleOwner;
    }

    public void setVehicleOwner(VehicleOwnerDTO vehicleOwner) {
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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public LocalDateTime getFirstRegistration() {
        return firstRegistration;
    }

    public void setFirstRegistration(LocalDateTime firstRegistration) {
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
