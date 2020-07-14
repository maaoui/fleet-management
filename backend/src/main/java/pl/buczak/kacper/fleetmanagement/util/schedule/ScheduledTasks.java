package pl.buczak.kacper.fleetmanagement.util.schedule;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import pl.buczak.kacper.fleetmanagement.repository.vehicle.TechnicalExaminationRepository;
import pl.buczak.kacper.fleetmanagement.util.email.EmailService;

import java.text.MessageFormat;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
@Component
public class ScheduledTasks {
    @Value("${jobs.send_expiration_emails.enabled}")
    private boolean sendEmailsEnabled;

    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
    private static final long TIME_INTERVAL_BETWEEN_DATES_MILLISECONDS = 1000 * 60 * 60 * 24 * 14;

    private TechnicalExaminationRepository technicalExaminationRepository;
    private EmailService emailService;

    public ScheduledTasks(TechnicalExaminationRepository technicalExaminationRepository, EmailService emailService) {
        this.technicalExaminationRepository = technicalExaminationRepository;
        this.emailService = emailService;
    }

    @Scheduled(cron = "${jobs.send_expiration_emails.cron}")
    public void sendReminderOfTechnicalExaminationToEmployeeBindedToVehicle() {
        if (sendEmailsEnabled) {
            Date startDate = new Date();
            Date endDate = new Date();
            endDate.setTime(startDate.getTime() + TIME_INTERVAL_BETWEEN_DATES_MILLISECONDS);
            technicalExaminationRepository
                    .findAllBetweenDates(startDate, endDate)
                    .stream()
                    .forEach(technicalExamination -> {
                        emailService.sendIncomingTechnicalExaminationEmail(technicalExamination.getVehicle().getCurrentEmployee(), technicalExamination);
                        log.info(MessageFormat.format("Email was send to {0}", technicalExamination.getVehicle().getCurrentEmployee().getEmail()));
                    });
        }
    }
}
