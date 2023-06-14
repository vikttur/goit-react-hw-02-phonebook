import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <form className={css.contactForm}>
        <label htmlFor={this.nameInputId} className={css.inputBlock}>
          Name
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            className={css.inputField}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={this.numberInputId} className={css.inputBlock}>
          Number
          <input
            type="tel"
            name="number"
            id={this.numberInputId}
            className={css.inputField}
            placeholder="Enter the phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button
          type="button"
          className={css.button}
          // onClick={() => onLeaveFeedback(feedback)}
        >
          Add contact
        </button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	children: PropTypes.element.isRequired,
// };
