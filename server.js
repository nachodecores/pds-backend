require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

const APP_PORT = process.env.APP_PORT || 8000;
app.listen(APP_PORT, () => {
  console.log(`[Express] Servidor corriendo en el puerto ${APP_PORT}.\n`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
