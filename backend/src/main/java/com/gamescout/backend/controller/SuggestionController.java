package com.gamescout.backend.controller;

import com.gamescout.backend.model.MetaRecord;
import com.gamescout.backend.service.SuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

}
