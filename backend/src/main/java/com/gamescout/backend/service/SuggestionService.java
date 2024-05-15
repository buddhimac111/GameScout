package com.gamescout.backend.service;

import com.gamescout.backend.model.*;
import com.gamescout.backend.repo.EpicGameRepo;
import com.gamescout.backend.repo.GameInfoRepo;
import com.gamescout.backend.repo.SteamGameRepo;
import com.gamescout.backend.repo.SuggestionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SuggestionService {

    final private SuggestionRepo suggestionRepo;
    final private GameInfoRepo gameInfoRepo;
    final private SteamGameRepo steamGameRepo;
    final private EpicGameRepo epicGameRepo;

    @Autowired
    private SuggestionAlgorithm suggestionAlgorithm;


    public void saveMetaRecord(MetaRecord metaRecord) {
        metaRecord.setDate(LocalDate.now().toString());
        metaRecord.setTime(LocalTime.now().toString());
        suggestionRepo.save(metaRecord);
    }

    public List<SuggestGame> getSuggestionGames(String userId) {

        List<String> recommendedGames = suggestionAlgorithm.RecommendedGames(userId);

//        find games in data in collections
        List<SteamGame> steamGameList = steamGameRepo.findAllByScrapeTitleIn(recommendedGames);
        List<EpicGame> epicGameList = epicGameRepo.findAllByScrapeTitleIn(recommendedGames);
        List<GameInfo> gameInfoList = gameInfoRepo.findAllByScrapeTitleIn(recommendedGames);

        return List.of(SuggestGame.builder()
                .gameInfoList(gameInfoList)
                .steamGameList(steamGameList)
                .epicGameList(epicGameList)
                .build());
    }


}
