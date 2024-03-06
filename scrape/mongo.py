from pymongo import MongoClient

try:
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017/')

    # Access the database
    db = client['gameScout']

    # Access the collection
    collection = db['steam']

    # Find all documents
    all_documents = collection.find()

    # Iterate over the cursor and print each document
    for document in all_documents:
        print(document)

except Exception as e:
    print(f"An error occurred: {e}")
