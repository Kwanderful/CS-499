import ContactClient from "./components/ContactClient";
import { ContactType } from "../.next/types/contact";
import { getAllContacts } from "./server/contact-actions";
import styles from "./page.module.css"


export default async function Home() {
  let contacts: ContactType[] = [];
  try {
      contacts = await getAllContacts();
  } catch (error) {
      console.error("There was an error fetching contacts:", error);
      contacts = [];
  }

  // Renders a client component that uses useState so this page can remain a server component 
  // and fetch the contacts from the server. 
  // The client component serves as an in-between for the main page and the AddContact modal, 
  // which needs to communicate with the server.
  return (
    <div className={styles.page}>
      <ContactClient contacts={contacts!}/>
      <div>
        <p className={styles.iconsCredit}>icons from icons8.com</p>
      </div>
    </div>
  );
}
