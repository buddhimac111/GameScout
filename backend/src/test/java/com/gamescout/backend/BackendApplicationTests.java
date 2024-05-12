package com.gamescout.backend;

import com.gamescout.backend.model.EpicGame;
import com.gamescout.backend.model.GameInfo;
import com.gamescout.backend.model.SteamGame;
import com.gamescout.backend.model.User;
import com.gamescout.backend.repo.EpicGameRepo;
import com.gamescout.backend.repo.GameInfoRepo;
import com.gamescout.backend.repo.SteamGameRepo;
import com.gamescout.backend.repo.UserRepo;
import com.gamescout.backend.service.GameService;
import com.gamescout.backend.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class BackendApplicationTests {

    @Autowired
    GameService gameService;

	@Autowired
	UserService userService;

    @MockBean
    private EpicGameRepo epicGameRepo;

    @MockBean
    private SteamGameRepo steamGameRepo;

    @MockBean
    private GameInfoRepo gameInfoRepo;

	@MockBean
	private UserRepo userRepo;

    @Test
    public void getAllEpicGames() {
        // Arrange
        EpicGame testEpicGame = EpicGame.builder()
                .title("Alan Wake")
                .scrapeTitle("Alan Wake")
                .original_price("N/A")
                .discount("0%")
                .final_price("price")
                .epic_rating("rating")
                .build();
        when(epicGameRepo.findAll()).thenReturn(List.of(testEpicGame));

        // Act
        List<EpicGame> result = gameService.getAllEpicGames();

        // Assert
        assertEquals(1, result.size());
    }

    @Test
    public void getSingleEpicGames() {
        // Arrange
        EpicGame testEpicGame = EpicGame.builder()
                .title("Alan Wake")
                .scrapeTitle("Alan Wake")
                .original_price("N/A")
                .discount("0%")
                .final_price("price")
                .epic_rating("rating")
                .build();
        when(epicGameRepo.findByScrapeTitle("Alan Wake")).thenReturn(List.of(testEpicGame));

        // Act
        List<EpicGame> result = gameService.getSingleEpicGames("Alan Wake");

        // Assert
        assertEquals(1, result.size());
    }


    @Test
    public void getAllSteamGames() {
        // Arrange
        SteamGame testSteamGame = SteamGame.builder()
                .title("Alan Wake")
                .scrapeTitle("Alan Wake")
                .original_price("N/A")
                .discount("0%")
                .final_price("price")
                .steam_rating("rating")
                .release_date("date")
                .build();
        when(steamGameRepo.findAll()).thenReturn(List.of(testSteamGame));

        // Act
        List<SteamGame> result = gameService.getAllSteamGames();

        // Assert
        assertEquals(1, result.size());
    }

    @Test
    public void getSingleSteamGames() {
        // Arrange
        SteamGame testSteamGame = SteamGame.builder()
                .title("Alan Wake")
                .scrapeTitle("Alan Wake")
                .original_price("N/A")
                .discount("0%")
                .final_price("price")
                .steam_rating("rating")
                .release_date("date")
                .build();
        when(steamGameRepo.findByScrapeTitle("Alan Wake")).thenReturn(List.of(testSteamGame));

        // Act
        List<SteamGame> result = gameService.getSingleSteamGames("Alan Wake");

        // Assert
        assertEquals(1, result.size());
    }


    @Test
    public void getAllGameInfo() {
        // Arrange
        GameInfo testGameInfo = GameInfo.builder()
                .title("Alan Wake")
                .scrapeTitle("Alan Wake")
                .developer("developer")
                .publisher("publisher")
                .genres(List.of("genre"))
                .description("description")
                .build();
        when(gameInfoRepo.findAll()).thenReturn(List.of(testGameInfo));

        // Act
        List<GameInfo> result = gameService.getAllGameInfo();

        // Assert
        assertEquals(1, result.size());
    }

    @Test
    public void getSingleGameInfo() {
        // Arrange
        GameInfo testGameInfo = GameInfo.builder()
                .title("Alan Wake")
                .scrapeTitle("Alan Wake")
                .developer("developer")
                .publisher("publisher")
                .genres(List.of("genre"))
                .description("description")
                .build();
        when(gameInfoRepo.findByScrapeTitle("Alan Wake")).thenReturn(List.of(testGameInfo));

        // Act
        List<GameInfo> result = gameService.getSingleGameInfo("Alan Wake");

        // Assert
        assertEquals(1, result.size());
    }

    @Test
    public void getSingleUser() {
        // Arrange
        User testUser = User.builder()
                .firstName("test")
                .lastName("user")
                .email("test@gmail.com")
                .password("***************")
                .confirmPassword("***************")
                .termsAndConditions(true)
				.profilePicture("defaultProfile001.png")
				.isAdmin(false)
				.joinDate("2021-08-01")
                .build();
        when(userRepo.findBy_id("663bab2206353d306c799982")).thenReturn(List.of(testUser));

        // Act
        List<User> result = userService.getSingleUser("663bab2206353d306c799982");

        // Assert
        assertEquals(1, result.size());
    }

}
