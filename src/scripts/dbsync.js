const { sequelize } = require("../models");

async function reset() {
  console.log(
    "Wiping and recreating database."
  );

  await sequelize.sync({ force: true });
  console.log("Done!");
}

reset();
