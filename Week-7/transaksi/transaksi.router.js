const express = require("express");
const {
  TransaksiList,
  TransaksiCreate,
  TransaksiDetail,
  TransaksiUpdate,
  TransaksiDelete,
  TransaksiDetailByNomor,
} = require("./transaksi.controller");
const { IsAuthenticated, Validate } = require("../libs/lib.middleware");
const {
  TransaksiNomorReferensiValidator,
  TransaksiJumlahKeluarValidator,
  TransaksiJumlahMasukValidator,
  TransaksiTanggalValidator,
} = require("./transaksi.validation");

const TransaksiRouter = express.Router();

TransaksiRouter.get(
  "/",
  // [IsAuthenticated],
  TransaksiList
);
TransaksiRouter.post(
  "/",
  [
    // IsAuthenticated,
    Validate([
      TransaksiNomorReferensiValidator(false, true, false),
      TransaksiJumlahKeluarValidator(false),
      TransaksiJumlahMasukValidator(false),
      TransaksiTanggalValidator(false),
    ]),
  ],
  TransaksiCreate
);
TransaksiRouter.get(
  "/by-nomor/:nomor",
  // [IsAuthenticated],
  TransaksiDetailByNomor
);
TransaksiRouter.get(
  "/:id",
  // [IsAuthenticated],
  TransaksiDetail
);
TransaksiRouter.put(
  "/:id",
  //  [IsAuthenticated],
  TransaksiUpdate
);
TransaksiRouter.delete(
  "/:id",
  //  [IsAuthenticated],
  TransaksiDelete
);

module.exports = {
  TransaksiRouter,
};
