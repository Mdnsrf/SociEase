package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServicePerson;

public interface ServicePersonRepository extends JpaRepository<ServicePerson, Integer> {

}
