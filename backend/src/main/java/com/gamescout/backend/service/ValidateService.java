package com.gamescout.backend.service;


import com.gamescout.backend.model.User;
import com.gamescout.backend.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ValidateService {

    final UserRepo userRepo;

    public String validateRegister(User user) {

        //check if user already exists
        if (!userRepo.findByEmail(user.getEmail()).isEmpty()) {
            return "User already exists";
        }
        //check all fields are filled
        if (user.getFirstName().isEmpty() || user.getLastName().isEmpty() || user.getPassword().isEmpty() || user.getConfirmPassword().isEmpty() || user.getEmail().isEmpty() || !user.isTermsAndConditions()) {
            return "Please fill all fields";
        }
        //check if password and confirm password match
        if (!user.getPassword().equals(user.getConfirmPassword())) {
            return "Passwords do not match";
        }
        //check if email is valid
        if (!user.getEmail().contains("@") || !user.getEmail().contains(".")) {
            return "Invalid email";
        }
        //check if password is long enough
        if (user.getPassword().length() < 8) {
            return "Password must be at least 8 characters long";
        }

        return "Valid";
    }
}
