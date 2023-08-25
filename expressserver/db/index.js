const pgp = require("pg-promise")(/*options*/);
const db = pgp('postgres://postgres:pass@localhost:5432/ogmablog');

module.exports = db;