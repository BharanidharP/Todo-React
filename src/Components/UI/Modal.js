import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverLay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElememt = document.getElementById("overlays");

const Modal = props => {
  return (
    <div>
      <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElememt)}
        {ReactDOM.createPortal(
          <ModalOverLay>{props.children}</ModalOverLay>,
          portalElememt
        )}
      </Fragment>
    </div>
  );
};

export default Modal;
