import { useEffect, useState } from "react";
import api from "./api/axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema de Inventario</h1>
      <ProductForm onAdd={loadProducts} />
      <ProductList products={products} onDelete={loadProducts} />
    </div>
  );
}

export default App;

