const { Router } = require("express");
const router = Router();

router.get("/peliculas", (req, res) => {
  res, send("peliculas");
});

module.exports = router;
