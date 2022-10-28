const router = require("express").Router();
const Consola = require("../models/Consola");
const Videojuego = require("../models/Videojuego");

router.post("/", (req, res) => {
  Consola.create(req.body)
    .then((consola) => res.json(consola))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.get("/", (req, res) => {
  Consola.find()
    .sort("nombre")
    .then((consolas) => res.json(consolas))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.get("/top", (req, res) => {
  console.log("Agregados!");
  Videojuego.aggregate([
    { $unwind: { path: "$consolas" } },
    { $group: { _id: "$consolas", count: { $sum: 1 } } },
    {
      $lookup: {
        from: "consolas",
        localField: "_id",
        foreignField: "_id",
        as: "consola",
      },
    },
    {
      $project: {
        count: 1,
        nombre: {
          $getField: {
            field: "nombre",
            input: { $first: "$consola" },
          },
        },
      },
    },
  ])
    .then((stats) => res.json(stats))
    .catch((err) => {
      res.status(422).json({ errors: err.errors });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Consola.findByIdAndDelete(id)
    .then((consola) => res.json(consola))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

module.exports = router;
