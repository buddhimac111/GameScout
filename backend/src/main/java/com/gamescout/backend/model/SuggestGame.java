package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
public class SuggestGame{
    private List<GameInfo> gameInfoList;
    private List<SteamGame> steamGameList;
    private List<EpicGame> epicGameList;
}
