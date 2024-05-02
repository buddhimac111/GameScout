package com.gamescout.backend.controller;

import com.gamescout.backend.model.User;
import com.gamescout.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add-user")
    public ResponseEntity<String> addUser(@RequestBody User user) throws NoSuchAlgorithmException {
        return userService.addUser(user);
    }

    @PostMapping("/log-user")
    public String getUser(@RequestBody User user) throws NoSuchAlgorithmException {
        return userService.logUser(user);
    }


}
