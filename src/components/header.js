import PropTypes from "prop-types";
import style from "../App.module.css";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className={style.trackTitle}>
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "add"} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
