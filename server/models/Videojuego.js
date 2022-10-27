const { Schema, model } = require("mongoose");


const videojuegoSchema = new Schema(
  {
   nombre: {
    type: String,
    required: true,
   },
   descripcion:{
    type: String,
    required: true,
    },
   desarrollador: {type: Schema.Types.ObjectId, ref: "Desarrollador"},
   año:{
    type: Number,
    required: true,
   },
   consolas:[{type: Schema.Types.ObjectId, ref: "Consola"}],
   imagen:{
    type: String,
    required: true,
   },
   activo:{
    type: String,
    required: true,
   }

  });

const Videojuego= model("Videojuego", videojuegoSchema);

module.exports = Videojuego;