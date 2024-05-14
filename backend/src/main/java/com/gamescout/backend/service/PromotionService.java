package com.gamescout.backend.service;

import com.gamescout.backend.model.Promotion;
import com.gamescout.backend.repo.PromotionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PromotionService {

    private final PromotionRepo promotionRepo;

    public String addSlider(Promotion promotion) {
        return promotionRepo.save(promotion).get_id();
    }

    public List<Promotion> getAllPromotionSliders() {
        return promotionRepo.findAll();
    }

    public String deleteSlider(String _id) {
        promotionRepo.deleteById(_id);
        return "Slider deleted successfully";
    }
}
