package com.gamescout.backend.repo;

import com.gamescout.backend.model.SteamGame;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SteamGameRepo extends MongoRepository<SteamGame, String>{
    List<SteamGame> findByScrapeTitle(String scrapeTitle);
}
