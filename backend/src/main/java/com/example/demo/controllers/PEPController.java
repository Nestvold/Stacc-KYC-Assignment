package com.example.demo.controllers;

import com.example.demo.model.PersonProfile;
import com.example.demo.service.PersonProfileService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class PEPController {

    private final PersonProfileService personProfileService;

    public PEPController(PersonProfileService personProfileService) {
        this.personProfileService = personProfileService;
    }



    @GetMapping(path = "/profiles")
    public List<PersonProfile> getAllProfiles() {
        return  personProfileService.getAllProfiles();
    }


    @GetMapping(path = "/pep?={name}")
    public List<PersonProfile> fetchProfilesByName(@PathVariable String name) {
        return personProfileService.pepSearchPerson(name);
    }

}
