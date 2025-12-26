const mongoose = require("mongoose");

const MovementSchema = new mongoose.Schema({
  tipo: String,
  cantidad: Number,
  fecha: { type: Date, default: Date.now },
  producto: String,
  usuario: String
});

module.exports = mongoose.model("Movement", MovementSchema);
