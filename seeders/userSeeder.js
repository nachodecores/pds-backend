const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 90; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    users.push({
      firstname,
      lastname,
      email: faker.internet.email(firstname, lastname),
      phone: faker.phone.number("09#-###-###"),
      document: faker.phone.number("#.###.###-#"),
      DICOSE: faker.phone.number("#########"),
      address: faker.address.streetAddress(),
      location: "Localidad",
      department: "Departamento",
      RUC: faker.phone.number("############"),
      password: "1234",
      company: faker.company.name(),
    });
  }
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};
