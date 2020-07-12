package pl.buczak.kacper.fleetmanagement.service.vehicle;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.TechnicalExamination;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.TechnicalExaminationDTO;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.TechnicalExaminationRepository;

import java.util.List;
import java.util.stream.Collectors;

/*
    @author Kacper Buczak 
*/

@Service
public class TechnicalExaminationService {

    private TechnicalExaminationRepository technicalExaminationRepository;

    private ModelMapper modelMapper;

    public TechnicalExaminationService(TechnicalExaminationRepository technicalExaminationRepository, ModelMapper modelMapper) {
        this.technicalExaminationRepository = technicalExaminationRepository;
        this.modelMapper = modelMapper;
    }

    public List<TechnicalExaminationDTO> getAllTechnicalExaminationsSortedByDate() {
        return this.technicalExaminationRepository
                .findAllSortedByDate()
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public List<TechnicalExaminationDTO> getTechnicalExaminationsByVehicleId(Long id) {
        return this.technicalExaminationRepository
                .findAllByVehicleId(id)
                .stream()
                .map(this::entityToSimpleDTO)
                .collect(Collectors.toList());
    }

    public TechnicalExaminationDTO createTechnicalExamination(TechnicalExaminationDTO technicalExaminationDTO) {
        TechnicalExamination technicalExamination = modelMapper.map(technicalExaminationDTO, TechnicalExamination.class);
        return this.entityToSimpleDTO(this.technicalExaminationRepository.save(technicalExamination));
    }

    public TechnicalExaminationDTO editTechnicalExamination(TechnicalExaminationDTO technicalExaminationDTO) {
        TechnicalExamination technicalExaminationToEdit = this.technicalExaminationRepository.getOne(technicalExaminationDTO.getId());
        modelMapper.map(modelMapper.map(technicalExaminationDTO, TechnicalExamination.class), technicalExaminationToEdit);
        return this.entityToSimpleDTO(this.technicalExaminationRepository.save(technicalExaminationToEdit));
    }

    public void deleteTechnicalExamination(Long technicalExaminationId) {
        this.technicalExaminationRepository.deleteById(technicalExaminationId);
    }


    private TechnicalExaminationDTO entityToSimpleDTO(TechnicalExamination technicalExamination) {
        return modelMapper.map(technicalExamination, TechnicalExaminationDTO.class);
    }
}
