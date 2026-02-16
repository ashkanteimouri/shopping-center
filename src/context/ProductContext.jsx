import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/products").then(setProducts).catch(setError);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const { products } = useContext(ProductContext);
  return products;
};

const useProductDetails = (id) => {
  const { products } = useContext(ProductContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductDetails };
