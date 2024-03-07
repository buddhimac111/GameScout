from gameList import game_list
from steam import get_steam_data
from epic import get_epic_data
from mongo import insert_document

try:
    # scrape data from the steam store
    print("Scraping data from the Steam store, please wait..........")
    steamData = get_steam_data(game_list)
    print("Steam Scrape Completed")

    # save data to mongo
    print("Inserting data into the database, please wait..........")
    insert_document("steam", steamData)
    print("Data successfully inserted into the database")

    # print("Scraping data from the EPIC store, please wait..........")
    # print(get_epic_data(game_list))
except:
    print("Error: Unable to retrieve data")
    exit(1)
finally:
    exit(0)


