import api from "../api/axios";

export default function ProductList({ products, onDelete }) {
  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
    onDelete();
  };

  return (
    <div>
      <h3>Lista de Productos</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td>${p.precio}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => handleDelete(p._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
