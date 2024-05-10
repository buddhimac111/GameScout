package com.gamescout.backend.repo;

import com.gamescout.backend.model.GameInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameInfoRepo extends MongoRepository <GameInfo, String> {
    List<GameInfo> findByScrapeTitle(String scrapeTitle);
    Page<GameInfo> findByTitleContainingIgnoreCase(String searchTerm, Pageable pageable);
}
