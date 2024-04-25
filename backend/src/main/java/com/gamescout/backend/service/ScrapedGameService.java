package com.gamescout.backend.service;

import com.gamescout.backend.model.EpicGame;
import com.gamescout.backend.model.SteamGame;
import com.gamescout.backend.repo.EpicGameRepo;
import com.gamescout.backend.repo.SteamGameRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScrapedGameService {

    private final SteamGameRepo steamGameRepo;

    private final EpicGameRepo epicGameRepo;

    public List<SteamGame> getAllSteamGames() {
        return steamGameRepo.findAll();
    }

    public List<EpicGame> getAllEpicGames() {
        return epicGameRepo.findAll();
    }




}
