const router = require("express").Router();
const Videojuego = require("../models/Videojuego");
const Consola = require("../models/Consola");
const Desarrolador = require("../models/Desarrollador");

router.post("/", (req, res) => {
  Videojuego.create(req.body)
    .then((videojuego) => res.json(videojuego))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.get("/", (req, res) => {
  Videojuego.find()
    .populate("desarrollador")
    .populate("consolas")
    .sort("nombre")
    .then((videojuego) => res.json(videojuego))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Videojuego.findById(id)
    .populate("desarrollador")
    .populate("consolas")
    .then((videojuego) => res.json(videojuego))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Videojuego.findByIdAndUpdate(id, req.body, { new: true })
    .then((videojuego) => res.json(videojuego))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Videojuego.findByIdAndDelete(id)
    .then((videojuego) => res.json(videojuego))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

module.exports = router;
