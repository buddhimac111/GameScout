package com.gamescout.backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@Document(collection = "users")
public class User {
    @Id
    private String _id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String confirmPassword;
    private boolean termsAndConditions;
    private String profilePicture;
    private String joinDate;
    @Builder.Default
    private boolean isAdmin = false;

}