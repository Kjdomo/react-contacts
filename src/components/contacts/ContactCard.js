const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='', removeContact }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div>
                <button onClick={removeContact}>X</button>
            </div>
        </div>
    )
}

export default ContactCard;