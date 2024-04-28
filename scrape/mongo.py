from pymongo import MongoClient

def insert_document(collectionName, documents):
    try:
        # Connect to MongoDB
        client = MongoClient('mongodb://localhost:27017/')

        # Access the database
        db = client['gameScout']

        # Access the collection
        collection = db[collectionName]

        if isinstance(documents, list):  # Check if it's a list of documents
            for document in documents:
                filter = {'title': document['title']}  # Ensure each document has a 'title'
                update = {'$set': document}
                collection.update_many(filter, update, upsert=True)
        else:  # Single document case
            filter = {'title': documents['title']}
            update = {'$set': documents}
            collection.update_many(filter, update, upsert=True)

    except Exception as e:
        print(f"An error occurred: {e}")
