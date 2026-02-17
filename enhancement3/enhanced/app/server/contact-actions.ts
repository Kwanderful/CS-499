"use server";
// CRUD functions for contacts database
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../lib/mongodb";
import Contact from "../../models/Contact";
import { ContactType } from "@/.next/types/contact";

// READ all contacts
export async function getAllContacts(): Promise<ContactType[]> {
    try {
        await connectToDatabase();
        const rawContacts = await Contact.find({}).lean();
        const serializedContacts = rawContacts.map(contact => ({
            ...contact,
            _id: contact._id.toString()
        }));
        return serializedContacts;
    } catch (error) {
        console.error("There was an error fetching contacts:", error);
        throw error instanceof Error ? error : new Error("Failed to fetch contacts");
    }
}

// CREATE a new contact
export async function createContact(
    firstName: string,
    lastName: string,
    phone: string,
    address: string
): Promise<ContactType> {
    try {
        await connectToDatabase();
        const newContact = new Contact({ firstName, lastName, phone, address });
        await newContact.save();
        revalidatePath('/');
        return newContact;
    } catch (error) {
        console.error("There was an error creating the contact:", error);
        throw error instanceof Error ? error : new Error("Failed to create contact");
    }
}

export async function createContactFromFormData(formData: FormData): Promise<void> {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    await createContact(firstName, lastName, phone, address);
}

// UPDATE existing contact
export async function updateContact(
    firstName?: string, 
    lastName?: string,
    phone?: string,
    address?: string
): Promise<ContactType | null> {
    try {
        await connectToDatabase();
        const updatedContact = await Contact.findOneAndUpdate(
            { firstName, lastName, phone, address }, // Optional
            { new: true } // Returns the updated document
        );
        return updatedContact;
    } catch (error) {
        console.error("There was an error updating the contact:", error);
        throw error instanceof Error ? error : new Error("Failed to update contact");
    }
}

export async function updateContactFromFormData(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    await Contact.findByIdAndUpdate(id, {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phone: formData.get("phone") as string,
        address: formData.get("address") as string,
    });

    revalidatePath('/');
}

// DELETE a contact
export async function deleteContact(ContactID: string): Promise<void> {
    try {
        await connectToDatabase();
        await Contact.findByIdAndDelete(ContactID);
        revalidatePath('/');
    } catch (error) {
        console.error("There was an error deleting the contact:", error);
        throw error instanceof Error ? error : new Error("Failed to delete contact");
    }
}