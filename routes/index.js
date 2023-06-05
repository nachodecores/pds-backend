const categoryRoutes = require("./categoryRoutes");
const breedRoutes = require("./breedRoutes");
const herdsRoutes = require("./herdsRoutes");
const usersRoutes = require("./usersRoutes");
const auctionRoutes = require("./auctionRoutes");
const auctioneerRoutes = require("./auctioneerRoutes");

module.exports = (app) => {
  app.use("/category", categoryRoutes);
  app.use("/breed", breedRoutes);
  app.use("/catalogue", herdsRoutes);
  app.use("/users", usersRoutes);
  app.use("/auction", auctionRoutes);
  app.use("/auctioneers", auctioneerRoutes);
};
