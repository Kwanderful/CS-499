// ----------------------------------------------------
// Author: Kelsey Wanderlingh
// ----------------------------------------------------

package contact;

import java.util.ArrayList;

public class ContactService {
	
	private ArrayList<Contact> contacts;
	
	public ContactService() {
		contacts = new ArrayList<Contact>();
	}
	
	// Helper function to check if a contact exists within the list
	public Contact findContact(String id) {
		for (int i = 0; i < contacts.size(); ++i) {
			if (contacts.get(i).getContactID().equals(id)) {
				return contacts.get(i);
			}
		}
		return null;
	}
	
	// Helper function to find the index of the contact to be removed
	public int findContactIndex(String id) {
		for (int i = 0; i < contacts.size(); ++i) {
			if (contacts.get(i).getContactID().equals(id)) {
				return i;
			}
		}
		
		return -1;
	}
	
	// Add a contact to the list if it does not already exist
	public void addContact(Contact contact) {
		// If a contact with the new contactID already exists, throw an exception
		Contact tempContact = findContact(contact.getContactID());
		if (tempContact != null) {
			throw new IllegalArgumentException("A contact already exists with that ID.");
		}
		
		// Otherwise, add the new contact to the contact list
		
		else {
			contacts.add(contact);
		}
		
	}
	
	// Delete a contact from the list if it exists
	public void deleteContact(String id) {
		// If the desired contact does not exist, throw an exception
		Contact tempContact = findContact(id);
		if (tempContact == null) {
			throw new IllegalArgumentException("That contact does not exist.");
		}
		
		// Otherwise, remove the contact from the list
		else {
			contacts.remove(findContactIndex(id));
		}
	}
	
	public void updateFirstName(String id, String newFirstName) {
		// If the desired contact does not exist, throw an exception
		Contact tempContact = findContact(id);
		if (tempContact == null) {
			throw new IllegalArgumentException("That contact does not exist.");
		}
		
		else if (newFirstName == null || newFirstName.length() > 10) {
			throw new IllegalArgumentException("Invalid First Name");
		}
		
		else {
			int index = findContactIndex(id);
			contacts.get(index).setFirstName(newFirstName);
		}
	}
	
	public void updateLastName(String id, String newLastName) {
		// If the desired contact does not exist, throw an exception
		Contact tempContact = findContact(id);
		if (tempContact == null) {
			throw new IllegalArgumentException("That contact does not exist.");
		}
		
		else if (newLastName == null || newLastName.length() > 10) {
			throw new IllegalArgumentException("Invalid Last Name");
		}
		
		else {
			int index = findContactIndex(id);
			contacts.get(index).setLastName(newLastName);
		}
	}
	
	public void updatePhone(String id, String newPhone) {
		// If the desired contact does not exist, throw an exception
		Contact tempContact = findContact(id);
		if (tempContact == null) {
			throw new IllegalArgumentException("That contact does not exist.");
		}
		
		else if (newPhone == null || newPhone.length() != 10) {
			throw new IllegalArgumentException("Invalid Phone Number");
		}
		
		else {
			int index = findContactIndex(id);
			contacts.get(index).setPhone(newPhone);
		}
	}
	
	public void updateAddress(String id, String newAddress) {
		// If the desired contact does not exist, throw an exception
		Contact tempContact = findContact(id);
		if (tempContact == null) {
			throw new IllegalArgumentException("That contact does not exist.");
		}
		
		else if (newAddress == null || newAddress.length() > 30) {
			throw new IllegalArgumentException("Invalid Address");
		}
		
		else {
			int index = findContactIndex(id);
			contacts.get(index).setAddress(newAddress);
		}
	}
}