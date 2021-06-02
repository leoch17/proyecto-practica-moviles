const express = require("express");
const app = express();
const morgan = require("morgan");

//Middlewares

//Comenzando el servidor
app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
