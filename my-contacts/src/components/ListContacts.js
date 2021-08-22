import React from 'react'
import ContactCard from './ContactCard';
import './ListContacts.css';

const ListContacts = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const scrollCondition = `renderContactList.length <= 6 ? "no-scroll" : "scroll"`;

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div>
                <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
            </div>
        )
    });

    return (
        <div className={`c-list ${scrollCondition}`}>
            {renderContactList}
            <p className={`${renderContactList.length === 0 ? "no-contacts" : "contacts"}`}>There are no contacts.</p>
        </div>
    );
}

export default ListContacts;
