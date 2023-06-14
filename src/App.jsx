import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
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

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.addContact(contact);
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handlerFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  DisplayAll = () => {
    this.setState({ filter: '' });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onFormHandler={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          {contacts.length !== 0 ? (
            <>
              <Filter
                value={filter}
                onHandlerFilterChange={this.handlerFilterChange}
                onDisplayAll={this.DisplayAll}
              />
              <ContactList
                contacts={visibleContact}
                onDeleteContact={this.deleteContact}
              />
            </>
          ) : (
            <Notification message="The contact list is empty" />
          )}
        </Section>
      </div>
    );
  }
}
