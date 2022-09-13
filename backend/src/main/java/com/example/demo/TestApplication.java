package com.example.demo;

import com.example.demo.service.PersonProfileService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TestApplication {

	private final PersonProfileService personProfileService;

	public TestApplication(PersonProfileService personProfileService) {
		this.personProfileService = personProfileService;
	}

	public static void main(String[] args) {

		SpringApplication.run(TestApplication.class, args);
	}

}
