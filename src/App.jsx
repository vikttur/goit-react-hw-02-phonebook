import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchFilter from './components/SearchFilter/SearchFilter';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';

const TEST_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default class App extends Component {
  state = {
    contacts: TEST_CONTACTS,
    // contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts);
  };

  // фільтрація
  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ contacts: TEST_CONTACTS, filter: value });

    this.contactFilter(value);
  };

  contactFilter = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(function (contact) {
        return contact.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
      }),
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onFormHandler={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <>
            <SearchFilter
              filter={filter}
              onHandleFilterChange={this.handleFilterChange}
            />
            {contacts.length !== 0 ? (
              <ContactList
                contacts={contacts}
                onDeleteContact={this.deleteContact}
              />
            ) : (
              <Notification message="The contact list is empty" />
            )}
          </>
        </Section>
      </>
    );
  }
}
