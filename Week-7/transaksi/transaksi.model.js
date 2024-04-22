const mongoose = require("mongoose");

const TransaksiObject = {
  nomorReferensi: { type: String, unique: true },
  jumlahKeluar: { type: Number },
  jumlahMasuk: { type: Number },
  tanggal: { type: Date },
};

const TransaksiSchema = new mongoose.Schema(TransaksiObject);

const TransaksiModel = new mongoose.model("Transaksi", TransaksiSchema);

module.exports = {
  TransaksiObject,
  TransaksiSchema,
  TransaksiModel,
};
