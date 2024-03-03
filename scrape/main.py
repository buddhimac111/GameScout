from gameList import game_list
from steam import get_steam_data
from epic import get_epic_data

try:
    print("Scraping data from the Steam store, please wait..........")
    print(get_steam_data(game_list))

    # print("Scraping data from the EPIC store, please wait..........")
    # print(get_epic_data(game_list))
except:
    print("Error: Unable to retrieve data")
    exit(1)
finally:
    print("all done!")
    exit(0)


