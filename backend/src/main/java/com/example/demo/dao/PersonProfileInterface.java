package com.example.demo.dao;

import com.example.demo.model.PersonProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface PersonProfileInterface extends MongoRepository<PersonProfile, String> {

    @Query("{name:'?0'}")
    List<PersonProfile> pepSearchName(String name);

}
