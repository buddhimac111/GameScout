package com.gamescout.backend.service;

import com.gamescout.backend.model.EpicGame;
import com.gamescout.backend.model.GameInfo;
import com.gamescout.backend.model.SteamGame;
import com.gamescout.backend.repo.EpicGameRepo;
import com.gamescout.backend.repo.GameInfoRepo;
import com.gamescout.backend.repo.SteamGameRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GameService {

    private final SteamGameRepo steamGameRepo;
    private final EpicGameRepo epicGameRepo;
    private final GameInfoRepo gameInfoRepo;

    public List<SteamGame> getAllSteamGames() {
        return steamGameRepo.findAll();
    }

    public List<EpicGame> getAllEpicGames() {
        return epicGameRepo.findAll();
    }

    public List<GameInfo> getAllGameInfo() {
        return gameInfoRepo.findAll();
    }

    public List<SteamGame> getSingleSteamGames(String scrapeTitle) {
        return steamGameRepo.findByScrapeTitle(scrapeTitle);
    }

    public List<EpicGame> getSingleEpicGames(String scrapeTitle) {
        return epicGameRepo.findByScrapeTitle(scrapeTitle);
    }

    public List<GameInfo> getSingleGameInfo(String scrapeTitle) {
        return gameInfoRepo.findByScrapeTitle(scrapeTitle);
    }

    public List<GameInfo> searchGames(String searchTerm) {
        PageRequest pageRequest = PageRequest.of(0, 5);
        Page<GameInfo> page = gameInfoRepo.findByTitleContainingIgnoreCase(searchTerm, pageRequest);
        return page.getContent();
    }

    public String addGameInfo(GameInfo gameInfo) {
        return gameInfoRepo.save(gameInfo).get_id();
    }


}
