package com.gamescout.backend.service;

import com.gamescout.backend.model.GameInfo;
import com.gamescout.backend.model.MetaRecord;
import com.gamescout.backend.repo.GameInfoRepo;
import com.gamescout.backend.repo.SuggestionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SuggestionAlgorithm {

    final private SuggestionRepo suggestionRepo;
    final private GameInfoRepo gameInfoRepo;

    public List<String> RecommendedGames(String userId) {
//            get latest meta records
        List<MetaRecord> FilteredGames = suggestionRepo.findAllByUserIdOrderByDateDesc(userId);

//        get games based on that meta records
        List<GameInfo> gameInfoList = gameInfoRepo.findByScrapeTitle(FilteredGames.get(0).getGameTitle());

//        get 9 games from the list with similar genres
        List<GameInfo> recommendedGames = gameInfoRepo.findAllByGenresContainingIgnoreCase(gameInfoList.get(0).getGenres());

        return recommendedGames.stream()
                .map(GameInfo::getScrapeTitle)
                .collect(Collectors.toList());
    }
}
