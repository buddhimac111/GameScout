package com.gamescout.backend.repo;

import com.gamescout.backend.model.EpicGame;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EpicGameRepo extends MongoRepository<EpicGame, String>{
}
