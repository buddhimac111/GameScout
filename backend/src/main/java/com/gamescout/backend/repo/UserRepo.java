package com.gamescout.backend.repo;

import com.gamescout.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
    List<User> findByEmail(String email);
    List<User> findBy_id(String _id);
}
