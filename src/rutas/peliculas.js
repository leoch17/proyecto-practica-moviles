const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const peliculas = require("../ejemplo.json");

router.get("/", (req, res) => {
  res.json(peliculas);
});

router.post("/", (req, res) => {
  const { title, director, year, prime, nominations, raiting } = req.body;
  if (title && director && year && prime && nominations && raiting) {
    const id = peliculas.length + 1;
    const peliculasnew = { ...req.body, id };
    peliculas.push(peliculasnew);
    res.json(peliculas);
  } else {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.delete("/:id", (req, res) => {
  _.each(peliculas, (pelicula, i) => {
    if (pelicula.id == id) {
      peliculas.splice(i, 1);
    }
  });
  res.send(peliculas);
});

module.exports = router;
