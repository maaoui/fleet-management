package pl.buczak.kacper.fleetmanagement.util.email;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.TechnicalExamination;

import java.text.MessageFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
@Service
public class EmailService {
    private static final String LINE_SEPARATOR = System.getProperty("line.separator");
    private static final String REMINDER_EMAIL_SUBJECT = "[Fleet Management] - Technical Examination Reminder";

    @Value("${jobs.send_expiration_emails.sender_address}")
    private String emailSenderAddress;
    private JavaMailSender emailSender;

    public EmailService(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    public void sendIncomingTechnicalExaminationEmail(Employee employee, TechnicalExamination technicalExamination) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(emailSenderAddress);
        message.setTo(employee.getEmail());
        message.setSubject(REMINDER_EMAIL_SUBJECT);
        message.setText(this.getIncomingTechnicalExaminationEmailText(employee, technicalExamination));
        emailSender.send(message);
    }

    private String getIncomingTechnicalExaminationEmailText(Employee employee, TechnicalExamination technicalExamination) {
        return MessageFormat.format("Dear {1} {2}, {0}" +
                        "Technical examination for car {3} {4} with registration plate number {5} is going to expire on {6}, " +
                        "please make sure to go to technical inspection before that date. {0}",
                LINE_SEPARATOR,
                employee.getFirstName(),
                employee.getLastName(),
                technicalExamination.getVehicle().getMake(),
                technicalExamination.getVehicle().getModel(),
                technicalExamination.getVehicle().getPlateNumber(),
                formatDate(technicalExamination.getNextExaminationDate())
        );
    }

    private String formatDate(Date date) {
        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
        return sdf1.format(date);
    }
}
