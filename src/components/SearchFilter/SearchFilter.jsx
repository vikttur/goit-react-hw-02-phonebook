import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

export default function SearchFilter({ filter, onHandleFilterChange }) {
  const filterInputId = nanoid();

  return (
    <label htmlFor={filterInputId} className={css.inputBlock}>
      Find contacts by name
      <input
        type="text"
        name="name"
        id={filterInputId}
        className={css.inputField}
        value={filter}
        placeholder="Enter name"
        onChange={onHandleFilterChange}
      />
      <button
        type="button"
        className={css.button}
        // onClick={() => (input.value = '')}
      >
        Clean up
      </button>
    </label>
  );
}

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleFilterChange: PropTypes.func.isRequired,
};
