package com.gamescout.backend.controller;

import com.gamescout.backend.model.MetaRecord;
import com.gamescout.backend.model.SuggestGame;
import com.gamescout.backend.service.SuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/suggestions")
@CrossOrigin(origins = "*")
public class SuggestionController {

    @Autowired
    private SuggestionService suggestionService;

    @PostMapping("/saveMetaRecord")
    public void saveMetaRecord(@RequestBody MetaRecord metaRecord) {
        suggestionService.saveMetaRecord(metaRecord);
    }

    @GetMapping("/get-suggest-games")
    public List<SuggestGame> getSuggestionGames(@RequestParam String userId) {
        return suggestionService.getSuggestionGames(userId);
    }

}
