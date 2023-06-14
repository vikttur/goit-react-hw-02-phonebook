import PropTypes from 'prop-types';
import css from './ContactItems.module.css';

export default function ContactItems({ name, number }) {
  return (
    <li className={css.item}>
      <span className={css.marker}></span>
      <p className={css.label}>{name}:</p>
      <p className={css.quantity}>{number}</p>
      <button
        type="button"
        className={css.button}
        // onClick={() => onLeaveFeedback(feedback)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
