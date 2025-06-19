import { useRef } from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import classes from "./Modal.module.css";
export default function Modal({ open, children }) {
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  const dialog = useRef();

  return createPortal(
    <dialog className={classes.modal} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
