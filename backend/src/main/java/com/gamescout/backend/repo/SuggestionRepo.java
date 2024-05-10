package com.gamescout.backend.repo;

import com.gamescout.backend.model.MetaRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SuggestionRepo extends MongoRepository<MetaRecord, String> {
    List<MetaRecord> findAllByUserIdOrderByDateDesc(String userId);

}
