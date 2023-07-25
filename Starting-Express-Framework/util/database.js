//const mysql = require("mysql2");
//const pool = mysql.createPool({
 // host: "localhost",
  //user: "root",
  //database: "starting-with-express-framework",
  //password: "Tushar@123",
//});

//module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("starting-with-express-framework", "root", "Tushar@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
