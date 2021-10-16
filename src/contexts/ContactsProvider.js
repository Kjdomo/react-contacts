import {  useState, useEffect } from "react";

import ContactsContext from "./ContactsContext";
import { createContact, deleteContact, getContacts } from "../utils/contacts";

const mockContacts = [
    {
      "id": 1,
      "firstName": "Culley",
      "lastName": "Snelman",
      "profilePic": "https://i.pravatar.cc/300?u=1",
      "phoneNumber": "351-346-6140",
      "email": "csnelman0@blog.com",
      "address": "09 Eggendart Parkway"
    }, 
    {
      "id": 2,
      "firstName": "Tammara",
      "lastName": "Allcorn",
      "profilePic": "https://i.pravatar.cc/300?u=2",
      "phoneNumber": "676-783-9239",
      "email": "tallcorn1@senate.gov",
      "address": "78145 Brentwood Court"
    }, 
    {
      "id": 3,
      "firstName": "Cassandry",
      "lastName": "Roze",
      "profilePic": "https://i.pravatar.cc/300?u=3",
      "phoneNumber": "223-879-6692",
      "email": "croze2@w3.org",
      "address": "2079 Morrow Parkway"
    }, 
    {
      "id": 4,
      "firstName": "Koressa",
      "lastName": "Galey",
      "profilePic": "https://i.pravatar.cc/300?u=4",
      "phoneNumber": "761-858-5580",
      "email": "kgaley3@economist.com",
      "address": "5 Hanover Alley"
    }
  ];

const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const storedContacts = getContacts();
        setContacts(storedContacts.length ? storedContacts : mockContacts);
        setIsLoading(false);
    }, []);

    const addContact = (contact) => {
      createContact(contact);
      const storedContacts = getContacts();
      setContacts(storedContacts);
    };

    const removeContact = (id) => {
      deleteContact(id);
      const storedContacts = getContacts();
      setContacts(storedContacts);
    }

    return (
        <ContactsContext.Provider value={{ contacts, addContact, removeContact } }>
            {children}
        </ContactsContext.Provider>

    )
}

export default ContactsProvider;