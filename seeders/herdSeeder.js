const { faker } = require("@faker-js/faker");
const {
  Herd,
  Breed,
  Category_Herd,
  User,
  Auctioneer,
  Auction,
} = require("../models");

faker.locale = "es";

module.exports = async () => {
  const herds = [];

  const breeds = await Breed.findAll();
  const categories = await Category_Herd.findAll();
  const users = await User.findAll();
  const auctioneers = await Auctioneer.findAll();
  const auctions = await Auction.findAll();

  for (let i = 0; i < 50; i++) {
    const breedId = breeds[Math.floor(Math.random() * breeds.length)].id;
    const categoryId =
      categories[Math.floor(Math.random() * categories.length)].id;
    const userId = users[Math.floor(Math.random() * users.length)].id;
    const auctioneerId =
      auctioneers[Math.floor(Math.random() * auctioneers.length)].id;
    const auctionId = auctions[Math.floor(Math.random() * auctions.length)].id;

    herds.push({
      breedId,
      categoryId,
      userId,
      auctioneerId,
      auctionId,
      inspection: faker.datatype.number({ min: 1, max: 500 }),
      certifier: "Pirulo González",
      originalPrice: faker.finance.amount(1, 4.5, 2),
      preBidPrice: faker.finance.amount(1, 4.5, 2),
      finalPrice: faker.finance.amount(1, 4.5, 2),
      weight: faker.datatype.number({ min: 0, max: 500, precision: 10 }),
      quantity: faker.datatype.number({ min: 1, max: 110 }),
      classType: faker.datatype.number({ min: 2, max: 4 }),
      state: faker.datatype.number({ min: 2, max: 4 }),
      sellStatus: "En Venta",
      media: "video",
      description: faker.lorem.sentence(25),
    });
  }

  await Herd.bulkCreate(herds);
  console.log("[Database] Se corrió el seeder de Herd.");
};
