import PropTypes from "prop-types";

const Button = ( {text, onClick, btnClass} ) => {
  return (
    <button className={`${btnClass}`} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

export default Button