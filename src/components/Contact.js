import React from 'react';
import styled from 'styled-components';

const ContactCard = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Contact = ({ contact }) => {
    return (
        <ContactCard>
            <h2>{contact.name}</h2>
            <p><strong>Email: </strong> {contact.email}</p>
            <p><strong>Phone: </strong> {contact.phone}</p>
            <p><strong>Website: </strong> <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
        </ContactCard>
    );
};

export default Contact;