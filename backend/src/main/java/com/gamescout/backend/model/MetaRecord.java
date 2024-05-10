package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "metaRecords")
public class MetaRecord{

    @Id
    private String _id;
    private String userId;
    private String gameTitle;
    private String steamPrice;
    private String epicPrice;
    private String description;
    private String date;
    private String time;
}

