const { Schema, model } = require("mongoose");


const desarrolladorSchema = new Schema(
  {
   nombre: {
    type: String,
    required: true,
   }
  });

const Desarrollador= model("Desarrollador", desarrolladorSchema);

module.exports = Desarrollador;