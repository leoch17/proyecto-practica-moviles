const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuración
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use(require("./rutas/index"));
app.use("/api/peliculas", require("./rutas/peliculas"));

//Comenzando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
