package com.gamescout.backend.repo;

import com.gamescout.backend.model.EpicGame;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EpicGameRepo extends MongoRepository<EpicGame, String>{
    List<EpicGame> findByScrapeTitle(String scrapeTitle);

    List<EpicGame> findAllByScrapeTitleIn(List<String> recommendedGames);
}
