const herdsRoutes = require("./herdsRoutes");
const usersRoutes = require("./usersRoutes");
const auctionRoutes = require("./auctionRoutes");
const auctioneerRoutes = require("./auctioneerRoutes");

module.exports = (app) => {
  app.use("/catalogue", herdsRoutes);
  app.use("/users", usersRoutes);
  app.use("/auction", auctionRoutes);
  app.use("/auctioneers", auctioneerRoutes);
};
