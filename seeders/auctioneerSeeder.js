const { Auctioneer } = require("../models");

module.exports = async () => {
  const auctioneers = [
    {
      name: "José Carlos Ramón",
      logo: "asdc",
      email: "jcramon@adinet.com.uy",
      phone: "099321654",
      address: "Pirulo 1234",
      department: "San José",
    },
    {
      name: "José Carlos Ramón",
      logo: "asdc",
      email: "jcramon@adinet.com.uy",
      phone: "099321654",
      address: "Pirulo 1234",
      department: "San José",
    },
    {
      name: "José Carlos Ramón",
      logo: "asdc",
      email: "jcramon@adinet.com.uy",
      phone: "099321654",
      address: "Pirulo 1234",
      department: "San José",
    },
    {
      name: "José Carlos Ramón",
      logo: "asdc",
      email: "jcramon@adinet.com.uy",
      phone: "099321654",
      address: "Pirulo 1234",
      department: "San José",
    },
  ];

  await Auctioneer.bulkCreate(auctioneers);
  console.log("[Database] Se corrió el seeder de Auctioneer.");
};
