package pl.buczak.kacper.fleetmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan
@Configuration
@EnableJpaRepositories
@SpringBootApplication
public class FleetManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(FleetManagementApplication.class, args);
    }

}
