import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Click
    </button>
  );
}

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
