import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSidebar";

import { useCart } from "../context/CartContext";

import styles from "./CheckOutPage.module.css";

import basketCar from "../assets/basket-car.jpg";

function CheckOutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.selectedItems.length) {
    return (
      <div className={styles.emptyContainer}>
        <img src={basketCar} alt="Empty" className={styles.image} />
        <Link to="/products" className={styles.button}>
          <FaArrowLeftLong />
          <span>Back to shop</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <BasketSideBar state={state} clickHandler={clickHandler} />
        <div className={styles.products}>
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
      <Link to="/products" className={styles.button}>
        <FaArrowLeftLong />
        <span>Back to shop</span>
      </Link>
    </>
  );
}

export default CheckOutPage;
