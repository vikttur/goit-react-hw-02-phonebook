import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

export default function SearchFilter({ title, children }) {
  const filtrInputId = nanoid();
  return (
    <label htmlFor={filtrInputId} className={css.inputBlock}>
      Find contacts by name
      <input
        type="text"
        name="name"
        id={filtrInputId}
        className={css.inputField}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}

// SearchFilter.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.element.isRequired,
// };
