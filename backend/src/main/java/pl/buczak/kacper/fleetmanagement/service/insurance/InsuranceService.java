package pl.buczak.kacper.fleetmanagement.service.insurance;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;
import pl.buczak.kacper.fleetmanagement.entity.dto.insurance.InsuranceDTO;
import pl.buczak.kacper.fleetmanagement.repository.insurance.InsuranceRepository;

/*
    @author Kacper Buczak 
*/
@Service
public class InsuranceService {

    private InsuranceRepository insuranceRepository;

    private ModelMapper modelMapper;

    public InsuranceService(InsuranceRepository insuranceRepository, ModelMapper modelMapper) {
        this.insuranceRepository = insuranceRepository;
        this.modelMapper = modelMapper;
    }

    public InsuranceDTO findInsuranceByVehicleId(Long vehicleId) {
        return insuranceRepository
                .findInsuranceByVehicleId(vehicleId)
                .map(this::entityToSimpleDTO)
                .get();
    }

    public InsuranceDTO updateInsurance(InsuranceDTO insuranceDTO) {
        Insurance insuranceToEdit = insuranceRepository.getOne(insuranceDTO.getId());
        insuranceToEdit.setCompanyName(insuranceDTO.getCompanyName());
        insuranceToEdit.setContactNumber(insuranceDTO.getContactNumber());
        insuranceToEdit.setInsuranceNumber(insuranceDTO.getInsuranceNumber());
        insuranceToEdit.setStartDate(insuranceDTO.getStartDate());
        insuranceToEdit.setEndDate(insuranceDTO.getEndDate());

        return entityToSimpleDTO(insuranceRepository
                .save(insuranceToEdit));
    }

    private InsuranceDTO entityToSimpleDTO(Insurance insurance) {
        InsuranceDTO insuranceDTO = modelMapper.map(insurance, InsuranceDTO.class);
        return insuranceDTO;
    }


}
