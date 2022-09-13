package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Document("PEP-STORAGE") // Should rather be @Document("person")
public class PersonProfile {

    private final double score;
    @Id
    private String id;
    private String schema;
    private String name;
    private String aliases;
    private LocalDate birth_date;
    private String countries;
    private String addresses;
    private String identifiers;
    private String sanctions;
    private Integer phones;
    private String emails;
    private String dataset;
    private String last_seen;
    private String first_seen;

    public PersonProfile(double score, String id, String schema, String name, String aliases, String dataset, String last_seen, String first_seen) {
        this.score = score;
        this.id = id;
        this.schema = schema;
        this.name = name;
        this.aliases = aliases;
        this.dataset = dataset;
        this.last_seen = last_seen;
        this.first_seen = first_seen;
    }
}
