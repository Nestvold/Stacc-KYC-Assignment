package com.example.demo.service;

import com.example.demo.dao.PersonProfileRepository;
import com.example.demo.model.PersonProfile;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PersonProfileService {

    private PersonProfileRepository personProfileRepository;

    public List<PersonProfile> pepSearchPerson(String name) {
        return personProfileRepository.findPersonProfileByName(name);
    }

    public List<PersonProfile> getAllProfiles() {
        return personProfileRepository.findAll();
    }

    public PersonProfile addPersonProfile(PersonProfile personProfile) {
        return personProfileRepository.save(personProfile);
    }
}
