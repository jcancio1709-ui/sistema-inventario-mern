const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
  rol: { type: String, default: "usuario" }
});

module.exports = mongoose.model("User", UserSchema);
