from gameList import game_list
from steam import get_steam_data

try:
    print("Scraping data from the Steam store, please wait..........")
    print(get_steam_data(game_list))
except:
    print("Error: Unable to retrieve data from the Steam store.")
    exit(1)
finally:
    print("all done!")
    exit(0)


