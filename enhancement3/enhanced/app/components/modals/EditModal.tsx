"use client";

import styles from "./ContactModal.module.css";
import { updateContactFromFormData } from "../../server/contact-actions";
import { ContactType } from "../../../.next/types/contact";

type EditModalProps = {
    contact: ContactType;
    isOpen: boolean;
    onClose: () => void;
};

// Modal that pops up and allows users to edit a contact
export default function EditModal({ contact, isOpen, onClose }: EditModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <h2>Edit Contact</h2>
                <form action={async (formData) => { await updateContactFromFormData(formData) 
                    onClose()}} className={styles.form}>
                    <input name="firstName" placeholder="First Name" defaultValue={contact.firstName} />
                    <input name="lastName" placeholder="Last Name" defaultValue={contact.lastName} />
                    <input name="phone" placeholder="Phone Number" defaultValue={contact.phone} />
                    <input name="address" placeholder="Address" defaultValue={contact.address} />

                    <input type="hidden" name="id" value={contact._id} />

                    <button className={styles.submitButton}type="submit">Update</button>
                </form>
                <button className={styles.closeButton}onClick={onClose}>Close</button>
            </div>
        </div>
    )
}