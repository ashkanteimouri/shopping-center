import { Navigate, Route, Routes } from "react-router-dom";

import CartProvider from "./context/CartContext";
import ProductsProvider from "./context/ProductContext";

import ProductsPage from "./pages/ProductsPage";
import CheckOutPage from "./pages/CheckOutPage";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layout/Layout";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/check-out" element={<CheckOutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
