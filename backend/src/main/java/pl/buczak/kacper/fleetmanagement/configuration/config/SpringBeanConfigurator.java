package pl.buczak.kacper.fleetmanagement.configuration.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*
    @author Kacper Buczak 
*/
@Configuration
public class SpringBeanConfigurator {

    public SpringBeanConfigurator() {
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
