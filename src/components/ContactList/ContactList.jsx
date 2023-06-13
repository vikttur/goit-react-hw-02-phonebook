import PropTypes from 'prop-types';
import ContactItems from '../ContactItems/ContactItems';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return <ContactItems key={id} name={name} number={number} />;
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
