const router = require("express").Router()
const Videojuegos = require("../models/Videojuego")
const Consola = require("../models/Consola")


router.post("/", (req,res)=>{
  Consola.create(req.body)
  .then(consola => res.json(consola))
  .catch(err => res.status(422).json({ errors: err.errors }))

})

router.get("/", (req,res)=>{
  Consola.find()
  .then(consolas => res.json(consolas))
  .catch(err => res.status(422).json({ errors: err.errors }))
})






module.exports= router;