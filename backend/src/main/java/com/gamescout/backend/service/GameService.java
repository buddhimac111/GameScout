package com.gamescout.backend.service;

import com.gamescout.backend.model.EpicGame;
import com.gamescout.backend.model.GameInfo;
import com.gamescout.backend.model.SteamGame;
import com.gamescout.backend.repo.EpicGameRepo;
import com.gamescout.backend.repo.GameInfoRepo;
import com.gamescout.backend.repo.SteamGameRepo;
import lombok.RequiredArgsConstructor;
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

    public String addGameInfo(GameInfo gameInfo) {
        return gameInfoRepo.save(gameInfo).get_id();
    }




}
