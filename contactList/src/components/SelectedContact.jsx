import React from 'react'
import { useEffect, useState } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const contactData = await response.json();
        setContact(contactData);
        console.log(contactData); // Log the data to the console
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);
  
  const goBack = () => {
    setSelectedContactId(null);
  };

  return (
    <div>
      <h2>Contact Information</h2>
      {contact ? (
        <>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </>
      ) : (
        <p>Loading contact information...</p>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default SelectedContact;