import { useContext } from "react";
import ContactCard from "./ContactCard"
import ContactsContext from "../../contexts/ContactsContext";

const ContactList = () => {
    const { contacts, removeContact } = useContext(ContactsContext);

    return (
        <div>
            {contacts.map((contact) => 
                <ContactCard 
                    removeContact={() => removeContact(contact.id)}
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </div>
    )
}

export default ContactList;