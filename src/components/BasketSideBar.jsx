import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSideBar.module.css";

function BasketSideBar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total : {state.total} $</p>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity : {state.itemsCounter}</p>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status : {!state.checkOut && "Pending..."}</p>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSideBar;
