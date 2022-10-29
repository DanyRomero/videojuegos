const router = require("express").Router();
const Videojuegos = require("../models/Videojuego");
const Desarrollador = require("../models/Desarrollador");
const Videojuego = require("../models/Videojuego");

router.post("/", (req, res) => {
  Desarrollador.create(req.body)
    .then((desarrollador) => res.json(desarrollador))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.get("/", (req, res) => {
  Desarrollador.find()
    .sort("nombre")
    .then((desarrollador) => res.json(desarrollador))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

router.get("/top", (req, res) => {
  Videojuego.aggregate([
    { $unwind: { path: "$consolas" } },
    {
      $group: {
        _id: "$desarrollador",
        consolas: {
          $addToSet: "$consolas",
        },
      },
    },
    {
      $lookup: {
        from: "desarrolladors",
        localField: "_id",
        foreignField: "_id",
        as: "desarrollador",
      },
    },
    {
      $project: {
        _id: 0,
        consolas: {
          $size: "$consolas",
        },
        desarrollador: {
          $first: "$desarrollador",
        },
      },
    },
    {
      $sort: { consolas: -1 },
    },
    {
      $limit: 5,
    },
  ]).then((results) => res.json(results));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Desarrollador.findByIdAndDelete(id)
    .then((desarrollador) => res.json(desarrollador))
    .catch((err) => res.status(422).json({ errors: err.errors }));
});

module.exports = router;
