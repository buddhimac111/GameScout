package com.gamescout.backend.controller;

import com.gamescout.backend.model.GameInfo;
import com.gamescout.backend.model.Promotion;
import com.gamescout.backend.service.PromotionService;
import com.gamescout.backend.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/promotions")
@CrossOrigin(origins = "*")
public class PromotionController {

    @Autowired
    private UploadService uploadService;

    @Autowired
    private PromotionService promotionService;

    @GetMapping("/get-promotion-sliders-all")
    public List<Promotion> getAllPromotionSliders() {
        return promotionService.getAllPromotionSliders();
    }

    @PostMapping(value = "/add-promotion-slider", consumes = "multipart/form-data")
    public ResponseEntity<String> addSlider(

            @RequestParam("uniqueTitle") String title,
            @RequestParam("description") String description,
            @RequestParam("sliderImage") MultipartFile sliderImage) throws IOException {

        String fileName = UUID.randomUUID().toString() + "." + uploadService.getExtension(sliderImage.getOriginalFilename());

        Promotion promotion = Promotion.builder()
                .title(title)
                .description(description)
                .sliderImage(fileName)
                .build();

        uploadService.uploadFile(sliderImage, fileName, "sliders");

        return ResponseEntity.ok(promotionService.addSlider(promotion));
    }

    @DeleteMapping("/delete-promotion-slider")
    public ResponseEntity<String> deleteSlider(@RequestParam("id") String id) {
        return ResponseEntity.ok(promotionService.deleteSlider(id));
    }

}
