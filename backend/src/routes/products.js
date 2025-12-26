const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Obtener productos
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Crear producto
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Actualizar producto
router.put("/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Producto actualizado" });
});

// Eliminar producto
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Producto eliminado" });
});

module.exports = router;
