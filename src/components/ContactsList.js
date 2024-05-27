import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchContacts } from '../services/api';
import Contact from './Contact';

const ContactsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ContactsList = () => {
    const [contacts, setContacts] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const contacts = await fetchContacts();
                setContacts(contacts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        getContacts();
    }, []);

    if (loading) {
        return <p>Loading contacts...</p>;
    }

    return (
        <ContactsContainer>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ContactsContainer>
    );
};

export default ContactsList;
