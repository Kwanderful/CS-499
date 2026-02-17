"use client";

import {useState} from "react";
import Navbar from "./ui/Navbar";
import ContactGrid from "./ContactGrid";
import AddContactModal from "./modals/ContactModal";
import { ContactType }from "../../.next/types/contact";
import styles from "./ContactClient.module.css";

type ContactClientProps = {
    contacts: ContactType[];
}

// Client component that contains the navbar, contact grid, and add contact modal. 
// This is the main component that gets rendered on the home page 
// and is responsible for managing the state of the add contact modal 
// and passing down the contacts to the contact grid.
// Because AddContactModal communicates with the server, this component serves as an in-between
// for the main page component.
export default function ContactClient( {contacts}: ContactClientProps) {
    const [isAddOpen, setIsAddOpen] = useState(false);

    return (
        <div>
            <Navbar onAddContact={() => setIsAddOpen(true)}/>
            <div className={styles.contactGrid}><ContactGrid contacts={contacts}/></div>
            <AddContactModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)}/>
        </div>
    )
}