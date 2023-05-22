const { Auctioneer } = require("../models");

module.exports = async () => {
  const auctioneers = [
    {
      name: "Álvarez Martens",
      logo: "alvarezmartens.svg",
      email: "alvarezmartens@hotmail.com",
      phone: "099 666 291",
      address: "Guillermo Tell 1092, Nueva Helvecia",
      department: "Colonia",
    },
    {
      name: "Matías Mascheroni",
      logo: "matiasmascheroni.svg",
      email: "mail ???",
      phone: "096 125 030",
      address: "Dirección ???",
      department: "San José",
    },
    {
      name: "Juan E. Peña",
      logo: "juanpena.svg",
      email: "juane_pe@hotmail.com",
      phone: "099 417 703",
      address: "Sarandí 716, San José de Mayo",
      department: "San José",
    },
    {
      name: "José Carlos Ramón",
      logo: "jcramon.svg",
      email: "jcramon@adinet.com.uy",
      phone: "099 342 175",
      address: "Rincón 665, San José de Mayo",
      department: "San José",
    },
  ];

  await Auctioneer.bulkCreate(auctioneers);
  console.log("[Database] Se corrió el seeder de Auctioneer.");
};
