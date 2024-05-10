package com.gamescout.backend.repo;

import com.gamescout.backend.model.MetaRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuggestionRepo extends MongoRepository<MetaRecord, String> {

}
