package com.gamescout.backend.service;

import com.gamescout.backend.model.MetaRecord;
import com.gamescout.backend.repo.SuggestionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;

@Service
@RequiredArgsConstructor
public class SuggestionService {

    final private SuggestionRepo suggestionRepo;

    public void saveMetaRecord(MetaRecord metaRecord) {
        metaRecord.setDate(LocalDate.now().toString());
        metaRecord.setTime(LocalTime.now().toString());
        suggestionRepo.save(metaRecord);
    }
}
