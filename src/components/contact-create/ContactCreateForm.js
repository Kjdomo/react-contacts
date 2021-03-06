import React, { useRef, useContext, useState } from "react";

import ContactsContext from "../../contexts/ContactsContext";

const ContactCreateForm = () => {
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const phoneNumberRef = useRef("");
    const emailRef = useRef("");
    const addressRef = useRef("");
    const [profilePic, setProfirePic ]= useState("");

    const { addContact } = useContext(ContactsContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addContact({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            phoneNumber: phoneNumberRef.current.value, 
            email: emailRef.current.value, 
            address: addressRef.current.value, 
            profilePic: profilePic,
        });
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        phoneNumberRef.current.value = "";  
        emailRef.current.value = ""; 
        addressRef.current.value = ""; 
        setProfirePic("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <img src={profilePic} alt="Profile preview." />
            </div>
            <div>
                <div>
                    <input
                        ref={firstNameRef}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                    />
                </div>
                <div>
                    <input
                        ref={lastNameRef}
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                    />
                </div>
                <div>
                    <input
                        ref={phoneNumberRef}
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                    />
                </div>
                <div>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div>
                    <input
                        ref={addressRef}
                        type="text"
                        placeholder="Address"
                        name="address"
                    />
                </div>
                <div>
                    <input
                        value={profilePic}
                        onChange={(event) => setProfirePic(event.target.value)}
                        type="text"
                        placeholder="Profile Picture Url"
                        name="profilePic"
                    />
                </div>
                <div>
                    <button type="submit">Add Contact</button>
                </div>
            </div>
        </form>
    );
}

export default ContactCreateForm;