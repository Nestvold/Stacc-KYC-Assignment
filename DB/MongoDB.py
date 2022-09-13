from pymongo import MongoClient
from pymongo.server_api import ServerApi


username = 'admin'
password = 'Q7Qu9hAgUzMeVnU4'


def connect_to_db():
    try:
        client = MongoClient(
            f"mongodb+srv://{username}:{password}@pep-storage.o8fzdeu.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'))
        print('Connected to MongoDB')
    except:
        print('Failed to connect to MongoDB')
    return client


def insert_db(data):
    client = connect_to_db()
    db = client['Profiles']
    collection = db['Persons']
    print(f'Populating the database {db} : {collection}')
    collection.insert_many(data)
