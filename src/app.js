const express = require("express");
const { Sequelize } = require('sequelize');
const db = require("./models");

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", async (req, res) => {
  const quote = await db.quote.findOne({
    include: db.author,
    order: db.sequelize.random(),
    limit: 1,
  });
  res.status(200).contentType('text/plain').send(`
  "${quote.quote}"
    - ${quote.author.name}
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
