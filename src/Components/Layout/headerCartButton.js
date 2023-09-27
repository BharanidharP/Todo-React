//import CartIcon from "../Cart/cartIcons";
import classes from "./headerCartButton.module.css";
const HeaderCartButton = props => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}></span>
      <span> Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
