#include <iostream>
#include <string>
#include <sstream>

using namespace std;
// The names and numbers that denote the user's service should be moved 
// to a database instead
// This way, authorization can be set up, allowing certain users to 
// accomplish certain tasks
// It would also be a better way of holding the information about the users
// without putting it in plain text
// For now, I made the names constants since they aren't meant to be
// changed
const string name1 = "Bob Jones";
const string name2 = "Sarah Davis";
const string name3 = "Amy Friendly";
const string name4 = "Johnny Smith";
const string name5 = "Carol Spears";

int num1 = 1; // Bob Jones
int num2 = 2; // Sarah Davis
int num3 = 1; // Amy Friendly
int num4 = 1; // Johnny Smith
int num5 = 2; // Carol Spears

// A function that will be used for input validation
// when using integer values
int getInt(const string& text) {
	string line;
	int num;

	while (true) {
		cout << text;

		getline(cin, line);

		istringstream iss(line);
		if (iss >> num && iss.eof()) {
			return num;
		}
		cout << "Invalid entry. Please enter a number.\n";
	}
}

int CheckUserPermissionAccess() {
	// Variables should be initialized
	// Not good to assume that uninitialized is equal to 0 or null
	string username, user_password = "";

	// Getline for safer input, and because
	// we use getline everywhere else
	// This prevents input from being stuck in the buffer
	cout << "Enter your username: \n";
	getline(cin, username);
	cout << "Enter your password: \n";
	getline(cin, user_password);

	if (user_password == "123") {
		return 1;
	}
	else {
		return 2;
	}
}

void ChangeCustomerChoice() {
	// Initialize variables to 0
	int changechoice = 0; 
	int newservice = 0;
	
	// Validate input - only accept a number 1-5
	while (changechoice != 1 && changechoice != 2 && changechoice != 3
		&& changechoice != 4 && changechoice != 5) {
		changechoice = getInt("Enter the number of the client that you wish to change\n");
		if ((changechoice != 1 && changechoice != 2 && changechoice != 3
			&& changechoice != 4 && changechoice != 5)) {
			cout << "You must enter a number 1-5.\n\n";
		}
	}

	// Validate input - only accept a number 1-2
	while (newservice != 1 && newservice != 2) {
		newservice = getInt("Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)\n");
		if (newservice != 1 && newservice != 2) {
			cout << "You must enter either 1 or 2.\n\n";
		}
	}

	if (changechoice == 1) {
		num1 = newservice;
	}
	else if (changechoice == 2) {
		num2 = newservice;
	}
	else if (changechoice == 3) {
		num3 = newservice;
	}
	else if (changechoice == 4) {
		num4 = newservice;
	}
	else if (changechoice == 5) {
		num5 = newservice;
	}
}

void DisplayInfo() {
	cout << "  Client's Name    Service Selected (1 = Brokerage, 2 = Retirement)" << endl;
	cout << "1. " << name1 << " selected option " << num1 << endl;
	cout << "2. " << name2 << " selected option " << num2 << endl;
	cout << "3. " << name3 << " selected option " << num3 << endl;
	cout << "4. " << name4 << " selected option " << num4 << endl;
	cout << "5. " << name5 << " selected option " << num5 << endl;

}

int main() {
	// Variables should be initialized
	// Not good to assume that uninitialized is equal to 0 or null
	// int answer;
	int answer = 0;

	cout << "Hello! Welcome to our Investment Company\n";
	cout << "Created by Kelsey Wanderlingh\n";
	while (true) {
		answer = CheckUserPermissionAccess();
		if (answer != 1) {
			cout << "Invalid Password. Please try again\n";
			continue;
		}
		break;
	}
	
	int choice = 0;
	while (choice != 3) {
		cout << "What would you like to do?\n";
		cout << "DISPLAY the client list (enter 1)\n";
		cout << "CHANGE a client's choice (enter 2)\n";
		cout << "Exit the program.. (enter 3)\n";

		choice = getInt("Enter an option: ");
		cout << "You chose " << choice << endl;

		if (choice == 1) {
			DisplayInfo();
		}
		else if (choice == 2) {
			ChangeCustomerChoice();
		}
		else if (choice == 3) {
			cout << "Exiting...";
		}
		else {
			cout << "Invalid option. Please enter a number 1-3.\n";
		}
	}
	return 0;
}