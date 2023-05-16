const herdsRoutes = require("./herdsRoutes");
// const usersRoutes = require("./usersRoutes");

module.exports = (app) => {
  //   app.use("/usuarios", usersRoutes);
  app.use("/catalogo", herdsRoutes);
};
