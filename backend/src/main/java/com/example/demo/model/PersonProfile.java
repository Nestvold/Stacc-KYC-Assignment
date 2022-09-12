package com.example.demo.model;

import java.util.Date;
import java.util.Objects;

//@Entity
public class PersonProfile {

    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String schema;
    private String name;
    private String aliases;
    private Date birth_date;
    private String countries;
    private String addresses;
    private String identifiers;
    private String sanctions;
    private Integer phones;
    private String emails;
    private String dataset;
    private Date last_seen;

    public PersonProfile() {
        super();
    }

    public PersonProfile(String schema, String name, String aliases, String identifiers, String dataset) {
        this.schema = schema;
        this.name = name;
        this.aliases = aliases;
        this.identifiers = identifiers;
        this.dataset = dataset;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getSchema() {
        return schema;
    }

    public void setSchema(String schema) {
        this.schema = schema;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAliases() {
        return aliases;
    }

    public void setAliases(String aliases) {
        this.aliases = aliases;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public String getCountries() {
        return countries;
    }

    public void setCountries(String countries) {
        this.countries = countries;
    }

    public String getAddresses() {
        return addresses;
    }

    public void setAddresses(String addresses) {
        this.addresses = addresses;
    }

    public String getIdentifiers() {
        return identifiers;
    }

    public void setIdentifiers(String identifiers) {
        this.identifiers = identifiers;
    }

    public String getSanctions() {
        return sanctions;
    }

    public void setSanctions(String sanctions) {
        this.sanctions = sanctions;
    }

    public Integer getPhones() {
        return phones;
    }

    public void setPhones(Integer phones) {
        this.phones = phones;
    }

    public String getEmails() {
        return emails;
    }

    public void setEmails(String emails) {
        this.emails = emails;
    }

    public String getDataset() {
        return dataset;
    }

    public void setDataset(String dataset) {
        this.dataset = dataset;
    }

    public Date getLast_seen() {
        return last_seen;
    }

    public void setLast_seen(Date last_seen) {
        this.last_seen = last_seen;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PersonProfile that = (PersonProfile) o;
        return Objects.equals(id, that.id) && Objects.equals(schema, that.schema) && Objects.equals(name, that.name) && Objects.equals(aliases, that.aliases) && Objects.equals(birth_date, that.birth_date) && Objects.equals(countries, that.countries) && Objects.equals(addresses, that.addresses) && Objects.equals(identifiers, that.identifiers) && Objects.equals(sanctions, that.sanctions) && Objects.equals(phones, that.phones) && Objects.equals(emails, that.emails) && Objects.equals(dataset, that.dataset) && Objects.equals(last_seen, that.last_seen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, schema, name, aliases, birth_date, countries, addresses, identifiers, sanctions, phones, emails, dataset, last_seen);
    }

    @Override
    public String toString() {
        return "PersonProfile{" +
                "id='" + id + '\'' +
                ", schema='" + schema + '\'' +
                ", name='" + name + '\'' +
                ", aliases='" + aliases + '\'' +
                ", birth_date=" + birth_date +
                ", countries='" + countries + '\'' +
                ", addresses='" + addresses + '\'' +
                ", identifiers='" + identifiers + '\'' +
                ", sanctions='" + sanctions + '\'' +
                ", phones=" + phones +
                ", emails='" + emails + '\'' +
                ", dataset='" + dataset + '\'' +
                ", last_seen=" + last_seen +
                '}';
    }
}
