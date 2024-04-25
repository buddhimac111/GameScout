package com.gamescout.backend.repo;

import com.gamescout.backend.model.SteamGame;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SteamGameRepo extends MongoRepository<SteamGame, Object>{
}
