package com.gamescout.backend.service;

import com.gamescout.backend.model.Contact;
import com.gamescout.backend.repo.ContactRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepo contactRepo;

    public String saveContactForm(Contact contact) {
        return contactRepo.save(contact).get_id();
    }
}
