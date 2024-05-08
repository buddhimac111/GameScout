package com.gamescout.backend.service;

import com.gamescout.backend.model.User;
import com.gamescout.backend.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    final UserRepo userRepo;
    @Autowired
    EncryptService encryptService;
    @Autowired
    ValidateService validateService;

    public ResponseEntity<String> addUser(User user) throws NoSuchAlgorithmException {

        if (!validateService.validateRegister(user).equals("Valid")) {
            return ResponseEntity.badRequest().body(validateService.validateRegister(user));
        }

        user.setPassword(encryptService.encrypt(user.getPassword()));
        user.setConfirmPassword(encryptService.encrypt(user.getConfirmPassword()));

        userRepo.save(user);

        return ResponseEntity.ok("User added");

    }

    public String logUser(User user) throws NoSuchAlgorithmException {

        List<User> Response = userRepo.findByEmail(user.getEmail());

        if (Response.isEmpty()) {
            return "invalid-email";
        }

        if ((Response.get(0).getPassword()).equals(encryptService.encrypt(user.getPassword()))) {
            return Response.get(0).get_id() + "-" + Response.get(0).isAdmin();
        }

        return "invalid-password";

    }
}
