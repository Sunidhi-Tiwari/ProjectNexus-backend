const mongoose = require("mongoose");
const config = require("./config_backend.js");

const mongoURI = config.database.mongoURI;

module.exports = () => {
  try {
    mongoose.connect(mongoURI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};
