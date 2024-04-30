import requests
from bs4 import BeautifulSoup
import re

# Function to get the data from the Steam store
def get_steam_data(game_list):
    
    
    # Initialize an empty list to store game data dictionaries.
    steam_data_array = []

    # For loop to iterate through each game in the game_list
    for game in game_list:

        # replace the spaces in the game name with a plus sign
        gameInput = game.replace(" ", "+")
        
        # Construct the URL to search for a specific game on the Steam store
        url = 'https://store.steampowered.com/search/?term='+gameInput+'&supportedlang=english&ndl=1'

        # Send an HTTP GET request to the Steam store search URL.
        response = requests.get(url)

        # Parse the HTML content of the page returned by the request using BeautifulSoup.
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the first search result element on the page, identified by its class name.
        resultRow = soup.find('a', class_='search_result_row ds_collapse_flag')

        # assign game details to variables
        gameTitle = resultRow.find('span', class_='title').text
        # Use regular expression to replace non-alphanumeric characters with an empty string
        cleanedGameTitle = re.sub(r'[^a-zA-Z0-9 ]', '', gameTitle)

        steamRating = resultRow.find('span', class_='search_review_summary').get('data-tooltip-html')
        
        releaseDate = resultRow.find('div', class_='search_released').text
         # Use regular expression to replace non-alphanumeric characters with an empty string
        cleanedReleaseDate = re.sub(r'[^a-zA-Z0-9 ]', '', releaseDate).strip()

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
            "scrapeTitle": game,
            "release_date": cleanedReleaseDate,
            "steam_rating":steamRating,
            "original_price": originalPrice,
            "discount": discount,
            "final_price": finalPrice
        }

        # Append the game details to the games_data list
        steam_data_array.append(singleGameData)
        
    return steam_data_array
