const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProducersSchema = new Schema({
  title: String,
  name: String,
  email: String,
  formLink: String,
  longName: String,
  page: String,
  phone1: String,
  phone2: String,
  phone3: String,
  mainPage: String,
});

module.exports = Producer = mongoose.model("Producer", ProducersSchema);
