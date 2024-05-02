package com.gamescout.backend.service;

import lombok.NoArgsConstructor;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Service
@NoArgsConstructor
public class EncryptService{

//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    public String encrypt(String password) throws NoSuchAlgorithmException {

        // Create MessageDigest instance for SHA-256
        MessageDigest md = MessageDigest.getInstance("SHA-256");

        // Digest the password and obtain the hash's bytes
        byte[] hashedPassword = md.digest(password.getBytes());

        // Convert the byte array into Base64 String to make it readable
        return Base64.getEncoder().encodeToString(hashedPassword);
    }

}
