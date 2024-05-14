package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "promotions")
public class Promotion {
    @Id
    private String _id;
    private String title;
    private String description;
    private String sliderImage;
}
