import sys
from secrets import secrets
from pymongo import MongoClient

# Connects to database and returns collections
def ConnectToDatabase():
    print("Attempting to connect to the database. Please wait.")

    # Attempt to connect given the connection string
    try:
        client = MongoClient(secrets.get('DATABASE_STRING'))
        client.admin.command("ping")
        print("Connected to the database successfully.\n")

    # Failed connection:
    except Exception as e:
        print("Failed to connect to the database: ", e, "\n")
        sys.exit(0)

    # Grab client data from the investment-company database
    # The collection is known as "clients"
    database = client["investment-company"]
    client_database = database["clients"]
    user_database = database["users"]
    number_of_clients = client_database.count_documents({})

    # If database is empty for some reason, exit the program
    if number_of_clients < 1:
        print("Error: Client database size is under 1.\n")
        sys.exit(0)

    return [client_database, user_database, number_of_clients]

# Returns client that is to be updated
def GetClientToUpdate(client_collection, number_of_clients):
    client_id = 0

    # Loop to ensure that user inputs a valid client ID
    while client_id not in range(1,number_of_clients):
        client_id = int(input("Enter the ID of the client that you wish to change\n"))
        if client_id not in range(1,number_of_clients):
            print("You must enter a number 1 -", number_of_clients)
    
    return client_collection.find_one({"clientID": client_id})

def GetClientArray(client_collection):
    client_array = []
    for client in client_collection.find():
        client_to_add = {"clientID": client["clientID"], "firstName": client["firstName"], "lastName": client["lastName"], "service": client["service"]}
        client_array.append(client_to_add)
    # print(client_array)
    return client_array

# Print's client's information for user to view
def PrintChosenClient(selected_client):
    print("You have chosen ", selected_client["firstName"], " ", selected_client["lastName"], 
          " whose current service is ", "1 - " if selected_client["service"] == "Brokerage" else "2 - ", 
          selected_client["service"], sep='')

# Accesses database to update a client's service
def UpdateClient(client_collection, selected_client, new_service):
    return client_collection.update_one({"clientID": selected_client["clientID"]}, 
                                          {"$set": {"service": new_service}})

# Gives user feedback based on their update
def UpdateFeedback(matched, modified):
    if matched == 1 and modified == 1:
        print("Successfully updated client.")
    elif matched == 0:
        print("A client with that ID could not be found.")
    elif matched == 1 and modified == 0:
        print("That client is already set to that service.")