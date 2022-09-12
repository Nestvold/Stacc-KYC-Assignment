package com.example.demo.controller;

import com.example.demo.service.PersonProfileService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/")
public class controller {

    private final PersonProfileService personProfileService;

    public controller(PersonProfileService personProfileService) {
        this.personProfileService = personProfileService;
    }


    @GetMapping
    public String getPersonByName() {
        return "Test";
    }

}
