package com.gamescout.backend.repo;

import com.gamescout.backend.model.GameInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameInfoRepo extends MongoRepository <GameInfo, String> {

}
