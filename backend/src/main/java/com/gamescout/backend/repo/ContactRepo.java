package com.gamescout.backend.repo;

import com.gamescout.backend.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepo extends MongoRepository<Contact, String>{
}
