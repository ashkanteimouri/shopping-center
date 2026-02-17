import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping Center</Link>
        <Link to="/check-out">
          <div>
            <LuShoppingCart />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by{" "}
          <a href="https://github.com/ashkanteimouri/shopping-center.git">
            Ashkan Teimouri Gharb
          </a>{" "}
          With 🤍
        </p>
      </footer>
    </>
  );
}

export default Layout;
