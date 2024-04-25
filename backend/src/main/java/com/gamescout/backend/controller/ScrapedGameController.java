package com.gamescout.backend.controller;

import com.gamescout.backend.model.EpicGame;
import com.gamescout.backend.model.SteamGame;
import com.gamescout.backend.service.ScrapedGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/scraped-games")
@CrossOrigin(origins = "*")
public class ScrapedGameController {

    @Autowired
    private ScrapedGameService scrapedGameService;

    @GetMapping("/get-steam-games-all")
    public List<SteamGame> getAllSteamGames() {
        return scrapedGameService.getAllSteamGames();
    }

    @GetMapping("/get-epic-games-all")
    public List<EpicGame> getAllEpicGames() {
        return scrapedGameService.getAllEpicGames();
    }
}
