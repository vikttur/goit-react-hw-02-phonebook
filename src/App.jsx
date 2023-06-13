import React, { Component } from 'react';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchFilter from './components/SearchFilter/SearchFilter';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';

const STARTING_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default class App extends Component {
  state = {
    contacts: STARTING_CONTACTS,
    filter: '',
  };

  // onLeaveFeedback = option =>
  //   this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  // countTotalFeedback = () =>
  //   Object.values(this.state).reduce((acc, value) => acc + value, 0);

  // countPositiveFeedbackPercentage = () =>
  //   Number.parseInt((this.state.good / this.countTotalFeedback()) * 100) + '%';

  render() {
    // const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          {this.state.contacts.length !== 0 ? (
            <>
              <SearchFilter />
              <ContactList contacts={this.state.contacts} />
            </>
          ) : (
            <Notification message="The contact list is empty" />
          )}
        </Section>
      </>
    );
  }
}
