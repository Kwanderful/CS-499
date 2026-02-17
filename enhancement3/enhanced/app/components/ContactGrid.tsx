import { ContactType }  from "../../.next/types/contact";
import Contact from "./Contact";
import styles from "./ContactGrid.module.css";

type ContactGridProps = {
    contacts: ContactType[];
}

// Renders a grid of contacts and is responsive, fitting to mobile screens as well
const ContactGrid = ({ contacts }: ContactGridProps) => {

    const contactGrid = contacts!.map((contact, ind) => (
        <Contact id={contact._id} firstName={contact.firstName} lastName={contact.lastName} 
        phone={contact.phone} address={contact.address} key={ind}/>
    ));

    return (
        <div className={styles.contactGrid}>
            {contactGrid}
        </div>)

}
export default ContactGrid;