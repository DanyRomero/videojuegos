const router = require("express").Router()
const Videojuegos = require("../models/Videojuego")
const Desarrollador = require("../models/Desarrollador")


router.post("/", (req,res)=>{
  Desarrollador.create(req.body)
  .then(desarrollador => res.json(desarrollador))
  .catch(err => res.status(422).json({ errors: err.errors }))

})

router.get("/", (req,res)=>{
  Desarrollador.find()
  .then(desarrollador => res.json(desarrollador))
  .catch(err => res.status(422).json({ errors: err.errors }))
})

router.delete("/:id", (req,res)=>{
  const {id} = req.params;
  Desarrollador.findByIdAndDelete(id)
    .then(desarrollador => res.json(desarrollador))
    .catch(err => res.status(422).json({ errors: err.errors }))
})






module.exports= router;