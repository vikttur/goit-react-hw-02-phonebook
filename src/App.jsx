import React, { Component } from 'react';
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

  // onLeaveFeedback = option =>
  //   this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  // countTotalFeedback = () =>
  //   Object.values(this.state).reduce((acc, value) => acc + value, 0);

  // countPositiveFeedbackPercentage = () =>
  //   Number.parseInt((this.state.good / this.countTotalFeedback()) * 100) + '%';

  formSubmitHandler = data => {
    console.log(data);
    // this.setState(prevState => ({ contacts: prevState.name.push(data) }));
  };

  // фільтрація
  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });

    // this.contactFilter();
  };

  contactFilter = () => {
    this.state.contacts.filter({});
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
          {contacts.length !== 0 ? (
            <>
              <SearchFilter
                filter={filter}
                onHandleFilterChange={this.handleFilterChange}
              />
              <ContactList
                contacts={contacts}
                onDeleteContact={this.deleteContact}
              />
            </>
          ) : (
            <Notification message="The contact list is empty" />
          )}
        </Section>
      </>
    );
  }
}
