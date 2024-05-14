package com.gamescout.backend.repo;

import com.gamescout.backend.model.Promotion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionRepo extends MongoRepository<Promotion, String> {
}
