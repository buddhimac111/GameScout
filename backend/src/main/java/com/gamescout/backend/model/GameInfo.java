package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.File;
import java.util.List;

@Data
@Builder
@Document(collection = "gameInfo")
public class GameInfo {
    @Id
    private String _id;
    private String title;
    private String scrapeTitle;
    private String developer;
    private String publisher;
    private List<String> genres;
    private String description;
    private String wallpaper;

}
