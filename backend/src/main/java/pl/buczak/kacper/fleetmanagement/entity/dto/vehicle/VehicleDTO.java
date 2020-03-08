package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.*;

/*
    @author Kacper Buczak 
*/
public class VehicleDTO extends BaseDTO {

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

    @NotNull
    @Min(value = 0)
    @Max(value = 5000)
    private Double horsePower;
}
