import Link from "next/link";

import styles from "./Navbar.module.css";
import AddContact from "./AddContact";

type NavbarProps = {
    onAddContact: () => void
}

// Has a link to the home page (should be the only page) and the "Add Contact" button
const Navbar = ({ onAddContact }: NavbarProps) => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.title} href='/'>
                Contacts
            </Link>
            <div onClick={onAddContact}><AddContact /></div>
        </div>
    );
};
export default Navbar;