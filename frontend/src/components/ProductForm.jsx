import { useState } from "react";
import api from "../api/axios";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔴 EVITA RECARGA
    await api.post("/products", {
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock)
    });
    setForm({ nombre: "", categoria: "", precio: "", stock: "" });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Producto</h3>

      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        value={form.nombre}
        required
      />

      <input
        name="categoria"
        placeholder="Categoría"
        onChange={handleChange}
        value={form.categoria}
        required
      />

      <input
        name="precio"
        type="number"
        placeholder="Precio"
        onChange={handleChange}
        value={form.precio}
        required
      />

      <input
        name="stock"
        type="number"
        placeholder="Stock"
        onChange={handleChange}
        value={form.stock}
        required
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
