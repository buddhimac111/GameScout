from pymongo import MongoClient

def insert_document(collectionName, document):
    try:
        # Connect to MongoDB
        client = MongoClient('mongodb://localhost:27017/')

        # Access the database
        db = client['gameScout']

        # Access the collection
        collection = db[collectionName]

        # Insert documents
        collection.insert_many(document)

    except Exception as e:
        print(f"An error occurred: {e}")
