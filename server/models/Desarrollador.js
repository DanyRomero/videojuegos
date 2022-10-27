const { Schema, model } = require("mongoose");


const desarrolladorSchema = new Schema(
  {
   nombre: {
    type: String,
    required: true,
   }
  });

const Desarrolador= model("Desarrolador", desarrolladorSchema);

module.exports = Desarrolador;