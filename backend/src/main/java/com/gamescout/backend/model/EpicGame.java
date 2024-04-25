package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "epic")
public class EpicGame {

    @Id
    private ObjectId id;
    private String title;
    private String original_price;
    private String discount;
    private String final_price;
    private String rating;
    private String description;
}

