const mongoose = require("mongoose");

const CustomerObject = {
  nomor: { type: String, unique: true },
  nama: { type: String },
  imgURL: { type: String },
  email: { type: String },
  gender: { type: String }
};

const CustomerSchema = new mongoose.Schema(CustomerObject);

const CustomerModel = new mongoose.model("Customer", CustomerSchema);

module.exports = {
  CustomerObject,
  CustomerSchema,
  CustomerModel,
};
