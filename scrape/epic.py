from helium import *
import re

# Function to get the game data from the Epic Games store
def get_epic_data(game_list):

    # Initialize an empty list to store game data dictionaries.
    epic_data_array = []

    # For loop to iterate through each game in the game_list
    for game in game_list:

        # replace the spaces in the game name with a dash sign
        gameInput = game.replace(" ", "-")

        # Ping the Epic Games store in headless mode to get the game details
        start_firefox("https://store.epicgames.com/en-US/p/"+gameInput, headless=True)

        # assign game details to variables
        gameTitle = S(".css-1mzagbj").web_element.text
        # Use regular expression to replace non-alphanumeric characters with an empty string
        cleanedGameTitle = re.sub(r'[^a-zA-Z0-9 ]', '', gameTitle)

        if (S(".css-y2j3ic").exists() ):
            epicRating = S(".css-y2j3ic").web_element.text
        else:
            epicRating = "N/A"

        # price related scraping
        if (S(".css-1q7f74q").exists() or S(".css-14repyd").exists() or S(".css-zg96it").exists()):
            originalPrice = S(".css-4jky3p").web_element.text
            discount = find_all(S(".css-1kn2h2p > div"))[1].web_element.text
        else:
            originalPrice = "N/A" 
            discount = "N/A"

        finalPrice = find_all(S(".css-119zqif"))[-1].web_element.text

        # Create a dictionary to store the game details
        singleGameData = {
            "title": cleanedGameTitle,
            "epic_rating": epicRating,
            "original_price": originalPrice,
            "discount": discount,
            "final_price": finalPrice
        }

        # Append the game details to the games_data list
        epic_data_array.append(singleGameData)

    return epic_data_array