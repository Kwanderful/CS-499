import helper_functions 
import getpass # To obscure password while typing

def CheckUserPermissionAccess():
    user = None
    while user is None:
        username = input("Please enter your username: \n")
        password = getpass.getpass(prompt="Please enter your password: \n")

        user = user_collection.find_one({"username": username, "password": password})
        # No user found
        if user is None:
            print("Invalid username or password. Please try again.")
        
def ChangeCustomerChoice():
    # Grab desired client from the database
    selected_client = helper_functions.GetClientToUpdate(client_collection, number_of_clients)

    # Give the user information on their selected client to ensure they have chosen the correct one
    helper_functions.PrintChosenClient(selected_client)

    # Input validation for client's new service
    new_service = 0
    while new_service != "1" and new_service != "2":
        new_service = input("What would you like to change the client's service to? [1] for Brokerage and [2] for Retirement\n")
        if new_service != "1" and new_service != "2":
            print("You must enter either [1] for Brokerage or [2] for Retirement.\n")

    # Update client with new service
    result = helper_functions.UpdateClient(client_collection, selected_client, 
                                           "Brokerage" if new_service == "1" else "Retirement")

    # Give the user feedback based on what happened during the update
    helper_functions.UpdateFeedback(result.matched_count, result.modified_count)
    
def DisplayInfo():
    print("  Client's Name    Service Selected (1 = Brokerage, 2 = Retirement)")
    for client in client_collection.find():
        print(client["clientID"], ". ", client["firstName"], " ", client["lastName"], " selected option ", 
              # Prints 1 if their service is "Brokerage" and a 2 if it is "Retirement"
              "1: Brokerage" if client["service"] == "Brokerage" else "2: Retirement", sep='')
    print()

# Connect to the database
client_collection, user_collection, number_of_clients = helper_functions.ConnectToDatabase()

# Check that user is a valid user before allowing them to access the main program
CheckUserPermissionAccess()

answer = 0
print("Hello! Welcome to our Investment Company.")
print("Created by Kelsey Wanderlingh. Revised for CS-499.\n")

choice = ""
while choice != "3":
    print("What would you like to do?")
    print("DISPLAY the client list (enter 1)")
    print("CHANGE a client's choice (enter 2)")
    print("Exit the program.. (enter 3)\n")

    choice = input("Enter an option: \n")
    print("You chose", choice)

    match choice:
        case "1":
            DisplayInfo()
        case "2":
            ChangeCustomerChoice()
        case "3":
            print("Exiting...")
        case _:
            print("Invalid option. Please enter a number 1-3.\n")