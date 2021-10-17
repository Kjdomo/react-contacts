import { Link } from "react-router-dom";
import ContactsList from "./ContactsList";

const ContactsPage = () => {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <ContactsList />
            <Link to="/contacts/add"><div>Create Contact</div></Link>
        </div>
    );
}

export default ContactsPage;