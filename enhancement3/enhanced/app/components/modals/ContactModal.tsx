"use client";

import styles from "./ContactModal.module.css";
import { createContactFromFormData } from "@/app/server/contact-actions";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

// Modal that pops up and allows users to add a contact
export default function ContactModal({ isOpen, onClose }: ModalProps) {

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <h2>Add Contact</h2>
                <form action={async (formData) => { await createContactFromFormData(formData) 
                    onClose()}} className={styles.form}>
                    <input name="firstName" placeholder="First Name" />
                    <input name="lastName" placeholder="Last Name" />
                    <input name="phone" placeholder="Phone Number" />
                    <input name="address" placeholder="Address" />

                    <button className={styles.submitButton} type="submit">Add</button>
                </form>
                <button className={styles.closeButton}onClick={onClose}>Close</button>
            </div>
        </div>
    )
}