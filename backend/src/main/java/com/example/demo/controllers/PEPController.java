package com.example.demo.controllers;

import com.example.demo.dao.PersonProfileRepository;
import com.example.demo.model.PersonProfile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "/api")
public class PEPController {

    private final PersonProfileRepository personProfileRepository;

    public PEPController(PersonProfileRepository personProfileRepository) {
        this.personProfileRepository = personProfileRepository;
    }

    @GetMapping(path = "/profiles")
    public ResponseEntity<List<PersonProfile>> getAllProfiles() {
        return ResponseEntity.ok(personProfileRepository.findAll());
    }


    @GetMapping(path = "/pep/{name}")
    public ResponseEntity fetchProfilesByName(@PathVariable String name) {
        Optional<List<PersonProfile>> profiles = personProfileRepository.find(name);
        //Optional<List<PersonProfile>> profiles = personProfileRepository.findProfileByName(name);

        if (profiles.isPresent()) {
            return ResponseEntity.ok(profiles.get());
        } else {
            return ResponseEntity.ok("There was no profile matching name: " + name + " fond.");
        }
    }

    @PostMapping(path = "/pep")
    public ResponseEntity<PersonProfile> addPersonProfile(@RequestBody PersonProfile profile) {
        PersonProfile personProfile = new PersonProfile();
        personProfile.setScore(profile.getScore());
        personProfile.setId(profile.getId());
        personProfile.setName(profile.getName());
        personProfile.setIdentifiers(profile.getIdentifiers());
        personProfile.setLast_seen(profile.getLast_seen());
        personProfile.setFirst_seen(profile.getFirst_seen());

        return ResponseEntity.status(201).body(personProfileRepository.save(personProfile));
    }

}
