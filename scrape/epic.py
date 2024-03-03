import requests
from bs4 import BeautifulSoup
import re
import json

# Function to get the data from the EPIC store
def get_epic_data(game_list):
    
    
    # Initialize an empty list to store game data dictionaries.
    epic_data_array = []

    # For loop to iterate through each game in the game_list
    for game in game_list:

        # replace the spaces in the game name with a dash sign
        gameInput = game.replace(" ", "-")
        
        # Construct the URL to search for a specific game on the epic store
        url = 'https://store.epicgames.com/en-US/p/'+gameInput

        # Send an HTTP GET request to the Steam store search URL.
        response = requests.get(url)

        # Parse the HTML content of the page returned by the request using BeautifulSoup.
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the first search result element on the page, identified by its class name.
        resultRow = soup.find('span', class_='css-1mzagbj')

        # assign game details to variables
        gameTitle = resultRow.find('span', class_='title').text
        # Use regular expression to replace non-alphanumeric characters with an empty string
        cleanedGameTitle = re.sub(r'[^a-zA-Z0-9 ]', '', gameTitle)

        if (resultRow.find('div', class_='discount_original_price')):
            originalPrice = resultRow.find('div', class_='discount_original_price').text
        else:
            originalPrice = "N/A"

        if (resultRow.find('div', class_='discount_pct')):
            discount = resultRow.find('div', class_='discount_pct').text
        else:
            discount = "N/A"

        finalPrice = resultRow.find('div', class_='discount_final_price').text

        # Create a dictionary to store the game details
        singleGameData = {
            "title": cleanedGameTitle,
            "original_price": originalPrice,
            "discount": discount,
            "final_price": finalPrice
        }

        # Append the game details to the games_data list
        epic_data_array.append(singleGameData)

    # Convert the games_data list to a JSON string
    final_steam_json = json.dumps(epic_data_array, indent=4)

    return final_steam_json
 