"use client";
import Image from "next/image";
import styles from "./Contact.module.css";
import { useState } from "react";
import EditModal from "./modals/EditModal";
import { deleteContact } from "../server/contact-actions";

const Contact: React.FC<{ id: string, firstName: string, lastName: string, phone: string, address: string }> = (props) => {
    // Decide when to open the edit modal
    const [isEditing, setIsEditing] = useState(false);

    // Make phone number more readable (1234567890 -> (123) 456-7890)
    const FormatPhoneNumber = (num: string) => {
        // Don't format if number isn't 10 digits
        if (num.length !== 10) {
            return num;
        }
        else {
            return "(" + num.substring(0, 3) + ") " 
            + num.substring(3, 6) + "-" + num.substring(6, 10);
        }
    }

    return (
        <div className={styles.contactCard}>
            <div className={styles.buttonRow}>
                {/* Edit and delete buttons */}
                <Image 
                    className={styles.contactButton} 
                    src="/imgs/edit-contact.png" 
                    width={30} 
                    height={30} 
                    alt="Edit button"
                    onClick={() => setIsEditing(true)}>
                </Image>
                <Image 
                    className={styles.contactButton} 
                    src="/imgs/delete-contact.png" 
                    width={30} 
                    height={30} 
                    alt="Delete button"
                    onClick={async () => { await deleteContact(props.id); }}>
                </Image>
            </div>
            {/* Profile image and name */}
            <div className={styles.nameRow}>
                <Image src="/imgs/profile.png" width={20} height={20} 
                alt="Default Profile Image"></Image>
                <p>{props?.firstName}</p>
                <p>{props?.lastName}</p>
            </div>

            {/*Phone number*/}
            <div className={styles.phoneRow}>
                <b>Phone:</b> {FormatPhoneNumber(props?.phone || "")}
            </div>

            {/*Address */}
            <div className={styles.addressRow}>
                <b>Address</b>: {props?.address}
            </div>

            {/* Edit modal that only pops up when the user clicks the edit button */}
            <EditModal 
            contact={{firstName: props.firstName, lastName: props.lastName, 
                phone: props.phone, address: props.address, _id: props.id}} 
            isOpen={isEditing} onClose={() => setIsEditing(false)}/>
        </div>
    )

}
export default Contact;