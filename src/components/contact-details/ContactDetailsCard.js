import { useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import ContactsContext from "../../contexts/ContactsContext";

const  ContactDetailsCard = () => {
    const { contacts, isLoading } = useContext(ContactsContext);

    const { id } = useParams();
    
    const contact = contacts.find((contact) => contact.id === parseInt(id));

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (contact === undefined) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div>
                <img src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div>
                <p>{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </div>
    )
}

export default ContactDetailsCard;