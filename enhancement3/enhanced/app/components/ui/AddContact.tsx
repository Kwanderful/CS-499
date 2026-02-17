import Image from "next/image";
import styles from "./AddContact.module.css";

// Contains the "Add Contact" button and the associated text
const AddContact = () => {
    
    return (
        <div className={styles.addContact}>
            <Image src="/imgs/add-contact.png" width={30} height={30} alt="Add Button"></Image>
            <p className={styles.addContactText}>Add Contact</p>
        </div>
    )
}
export default AddContact;