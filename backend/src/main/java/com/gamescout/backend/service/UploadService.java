package com.gamescout.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class UploadService {

    public String getExtension(String filename) {
        return filename.substring(filename.lastIndexOf(".") + 1);
    }

    public boolean uploadFile(MultipartFile file, String fileName, String folder) throws IOException {

        String directoryPath = "src/main/resources/static/" + folder + "/";
        Path path = Paths.get(directoryPath, fileName);
        Files.createDirectories(path.getParent());
        file.transferTo(path);

        return true;
    }
}
