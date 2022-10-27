const { Schema, model } = require("mongoose");


const consolaSchema = new Schema(
  {
   nombre: {
    type: String,
    required: true,
   }
  });

const Consola= model("Consola", consolaSchema);

module.exports = Consola;