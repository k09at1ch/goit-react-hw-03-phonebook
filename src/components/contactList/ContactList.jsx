import React from 'react';
function ContactList(props) {
  const handleDeleteContact = id => {
    props.onDeleteContact(id);
  };

  return (
    <ul className="list">
      {props.contacts.map(contact => (
        <li key={contact.id} className="listItem">
          {contact.name}
          <span> </span>
          {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
