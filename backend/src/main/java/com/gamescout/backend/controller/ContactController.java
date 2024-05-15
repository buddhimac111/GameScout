package com.gamescout.backend.controller;

import com.gamescout.backend.model.Contact;
import com.gamescout.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/contacts")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/save-contact-form")
    public ResponseEntity<String> saveContactForm(@RequestBody Contact contact) {
        return ResponseEntity.ok(contactService.saveContactForm(contact));
    }

    @GetMapping("/get-all-contact-forms")
    public List<Contact> getAllContactForms() {
        return contactService.getAllContactForms();
    }
}

