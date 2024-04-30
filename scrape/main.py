from gameList import game_list
from steam import get_steam_data
from epic import get_epic_data
from mongo import insert_document

try:
    # # scrape data from the steam store
    # print("Scraping data from the Steam store, please wait..........")
    # steamData = get_steam_data(game_list)
    # print("Steam Scrape Completed")
    # print(steamData)

    # # save steam data to mongo
    # print("Inserting steam data into the database, please wait..........")
    # insert_document("steam", steamData)
    # print("Steam Data successfully inserted into the database")


    # scrape data from the epic store
    print("Scraping data from the Epic store, please wait..........")
    epicData = get_epic_data(game_list)
    print("Epic Scrape Completed")
    print(epicData)


    # save epic data to mongo
    print("Inserting epic data into the database, please wait..........")
    insert_document("epic", epicData)
    print("Epic Data successfully inserted into the database")

except Exception as e:
    print("An error occurred: ", e)
    exit(1)

finally:
    exit(0)


