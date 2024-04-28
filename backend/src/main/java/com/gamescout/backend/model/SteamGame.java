package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "steam")
public class SteamGame {

    @Id
    private String _id;
    private String title;
    private String original_price;
    private String discount;
    private String final_price;
    private String steam_rating;
    private String release_date;

}
