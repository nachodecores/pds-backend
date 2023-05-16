const { Auction } = require("../models");

module.exports = async () => {
  const auctions = [
    {
      date: "2023-04-27 00:25:04",
    },
  ];

  await Auction.bulkCreate(auctions);
  console.log("[Database] Se corrió el seeder de Auction.");
};
