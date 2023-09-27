import { Fragment } from "react";

import classes from "./header.module.css";
import HeaderCartButton from "./headerCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Delivery App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
