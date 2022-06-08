import PropTypes from "prop-types";

import style from "../App.module.css";

const Button = ({ onClick }) => {
  return <button onClick={onClick} className={style.btn}></button>;
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
