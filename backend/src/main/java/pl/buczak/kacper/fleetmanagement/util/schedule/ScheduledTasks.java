package pl.buczak.kacper.fleetmanagement.util.schedule;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.TechnicalExaminationRepository;

import java.text.SimpleDateFormat;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
@Component
public class ScheduledTasks {
    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    private static final int SCHEDULED_TASKS_RATE_BETWEEN_TASKS = 1000 * 60 * 60 * 24;
    private static final long TIME_INTERVAL_BETWEEN_DATES_MILLISECONDS = 1000 * 60 * 60 * 24 * 14;

    private TechnicalExaminationRepository technicalExaminationRepository;

    public ScheduledTasks(TechnicalExaminationRepository technicalExaminationRepository) {
        this.technicalExaminationRepository = technicalExaminationRepository;
    }

    @Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {

        Date startDate = new Date();
        Date endDate = new Date();
        endDate.setTime(startDate.getTime() + TIME_INTERVAL_BETWEEN_DATES_MILLISECONDS);

        technicalExaminationRepository
                .findAllBetweenDates(startDate, endDate)
                .stream()
                .forEach(technicalExamination -> {
                    log.info("Email address: {}", technicalExamination.getVehicle().getCurrentEmployee().getEmail());
                    log.info("Email address: {}", technicalExamination.getVehicle().getPlateNumber());
                });
    }
}
