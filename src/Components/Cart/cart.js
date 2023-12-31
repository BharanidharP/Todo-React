import Modal from "../UI/Modal";
import classes from "./cart.module.css";

const Cart = props => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: "2", price: 19.33 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <div>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>

        <div className={classes.actions}>
          <button className={classes["button--alt "]}></button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
