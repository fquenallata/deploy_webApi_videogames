require("dotenv").config();
const app = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT, DB_HOST } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`server raised in port: ${DB_HOST}:${PORT}`); // eslint-disable-line no-console
  });
});
