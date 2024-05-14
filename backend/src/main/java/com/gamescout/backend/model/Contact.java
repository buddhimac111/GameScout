package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "contacts")
public class Contact {
    @Id
    private String _id;
    private String userId;
    private String email;
    private String subject;
    private String message;
}