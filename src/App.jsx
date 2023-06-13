import React, { Component } from 'react';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchFilter from './components/SearchFilter/SearchFilter';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    contacts: [],
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
              <ContactList />
            </>
          ) : (
            <Notification message="The contact list is empty" />
          )}
        </Section>
      </>
    );
  }
}
