import PropTypes from "prop-types";
import style from "../App.module.css";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click! ");
  };
  return (
    <header className={style.trackTitle}>
      <h1>{title}</h1>
      <Button onClick={onClick} />
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
