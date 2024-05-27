import React from 'react';
import styled from 'styled-components';
import ContactsList from './components/ContactsList';

const AppContainer = styled.div`
    text-align: center;
    padding: 20px;
`;

const AppHeader = styled.header`
    background-color: #282c34;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
`;

const App = () => {
    return (
        <AppContainer>
            <AppHeader>
                <h1>Contacts</h1>
            </AppHeader>
            <ContactsList />
        </AppContainer>
    );
};

export default App;
