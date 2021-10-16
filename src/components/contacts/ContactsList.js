import { useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard"
import ContactsContext from "../../contexts/ContactsContext";

const ContactList = () => {
    const { contacts, removeContact } = useContext(ContactsContext);

    return (
        <div>
            {contacts.map((contact) => 
                <Link to={`/contacts/${contact.id}`}>
                    <ContactCard 
                        removeContact={() => removeContact(contact.id)}
                        key={contact.id}
                        firstName={contact.firstName} 
                        lastName={contact.lastName} 
                        phoneNumber={contact.phoneNumber} 
                        profilePic={contact.profilePic}
                    />
                </Link>
            )}
        </div>
    )
}

export default ContactList;