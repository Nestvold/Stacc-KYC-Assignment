package com.example.demo.dao;

import com.example.demo.model.PersonProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.Document;
import java.util.List;
import java.util.Optional;

@Repository
public interface PersonProfileRepository extends MongoRepository<PersonProfile, String> {

    @Query("{name: '?0'}")
    List<PersonProfile> findPersonProfileByName(String name);

}
