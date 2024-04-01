const mongoose = require("mongoose");

const MONGO_URI = "mongodb://0.0.0.0:27017/api-belajar-express";

const configDB = {
  useNewUrlParser: true,
};

const MongoDBConnection = () => {
  mongoose
    .connect(MONGO_URI, configDB)
    .then(() => {
      console.log("Berhasil terhubung ke database mongoDB");
    })
    .catch((error) => {
      console.log("Gagal terkoneksi database mongoDB");
      console.error(error);
    });
};

module.exports = {
  MongoDBConnection,
};
