package com.gamescout.backend.controller;

import com.gamescout.backend.model.EpicGame;
import com.gamescout.backend.model.GameInfo;
import com.gamescout.backend.model.SteamGame;
import com.gamescout.backend.service.GameService;
import com.gamescout.backend.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/scraped-games")
@CrossOrigin(origins = "*")
public class GameController {

    @Autowired
    private GameService gameService;

    @Autowired
    private UploadService uploadService;

    @GetMapping("/get-steam-games-all")
    public List<SteamGame> getAllSteamGames() {
        return gameService.getAllSteamGames();
    }

    @GetMapping("/get-epic-games-all")
    public List<EpicGame> getAllEpicGames() {
        return gameService.getAllEpicGames();
    }

    @GetMapping("/get-game-info-all")
    public List<GameInfo> getAllGameInfo() {
        return gameService.getAllGameInfo();
    }

    @GetMapping("/get-steam-games-single")
    public List<SteamGame> getSingleSteamGames(@RequestParam("scrapeTitle") String scrapeTitle) {
        return gameService.getSingleSteamGames(scrapeTitle);
    }

    @GetMapping("/get-epic-games-single")
    public List<EpicGame> getSingleEpicGames(@RequestParam("scrapeTitle") String scrapeTitle) {
        return gameService.getSingleEpicGames(scrapeTitle);
    }

    @GetMapping("/get-game-info-single")
    public List<GameInfo> getSingleGameInfo(@RequestParam("scrapeTitle") String scrapeTitle) {
        return gameService.getSingleGameInfo(scrapeTitle);
    }

    @PostMapping(value = "/add-game-info", consumes = "multipart/form-data")
    public ResponseEntity<String> addGameInfo(
            @RequestParam("wallpaper") MultipartFile wallpaper,
            @RequestParam("title") String title,
            @RequestParam("scrapeTitle") String scrapeTitle,
            @RequestParam("developer") String developer,
            @RequestParam("publisher") String publisher,
            @RequestParam("genres") List<String> genres,
            @RequestParam("description") String description) throws IOException {

        String fileName = UUID.randomUUID().toString() + "." + uploadService.getExtension(wallpaper.getOriginalFilename());

        GameInfo gameInfo = GameInfo.builder()
                .title(title)
                .scrapeTitle(scrapeTitle)
                .developer(developer)
                .publisher(publisher)
                .genres(genres)
                .description(description)
                .wallpaper(fileName)
                .build();

        uploadService.uploadFile(wallpaper, fileName, "wallpapers");

        return ResponseEntity.ok(gameService.addGameInfo(gameInfo));
    }


}
