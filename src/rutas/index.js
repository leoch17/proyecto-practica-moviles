const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    nombre: "Acurero",
    apodo: "El profe vergatario",
  };
  res.json(data);
});

module.exports = router;
