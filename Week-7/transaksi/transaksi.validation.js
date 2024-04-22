const { body } = require("express-validator");
const { TransaksiModel } = require("./transaksi.model");

const TransaksiIDValidator = (target = "nomorReferensi") => {
  const validator = body(target);

  validator.exists().withMessage("Field harus tersedia!").bail();
  validator.isMongoId().withMessage("Format ID tidak valid.").bail();
  validator.notEmpty().withMessage("Field tidak boleh kosong.").bail();

  validator
    .custom(async (id) => {
      const transaksi = await TransaksiModel.findOne({ _id: id });
      if (!transaksi) {
        throw new Error("Id transaksi tidak tersedia");
      }
    })
    .bail();

  return validator;
};

const TransaksiNomorReferensiValidator = (
  optional = false,
  forCreate = true,
  forModule = false,
  target = "nomorReferensi"
) => {
  const validator = body(target);

  if (optional) {
    validator.optional();
  }

  validator.exists().withMessage("Field harus tersedia!").bail();
  validator.notEmpty().withMessage("Field tidak boleh kosong.").bail();
  validator
    .isLength({ min: 6, max: 6 })
    .withMessage("Field hanya menerima tepat 6 karakter.")
    .bail();

  if (forCreate) {
    validator
      .custom(async (nomorReferensi) => {
        const transaksi = await TransaksiModel.findOne({ nomorReferensi });
        if (transaksi) {
          throw new Error("Nomor sudah digunakan.");
        }
      })
      .bail();
  }

  if (forModule) {
    validator
      .custom(async (nomorReferensi) => {
        const transaksi = await TransaksiModel.findOne({ nomorReferensi });
        if (!transaksi) {
          throw new Error("Nomor tidak tersedia.");
        }
      })
      .bail();
  }

  return validator;
};

const TransaksiJumlahKeluarValidator = (
  optional = false,
  target = "jumlahKeluar"
) => {
  const validator = body(target);

  if (optional) {
    validator.optional();
  }

  validator.exists().withMessage("Field harus tersedia!").bail();
  validator.notEmpty().withMessage("Field tidak boleh kosong.").bail();
  validator
    .isInt({ min: 0 })
    .withMessage("Format harus bilangan bulat minimum 0.")
    .bail();

  return validator;
};

const TransaksiJumlahMasukValidator = (
  optional = false,
  target = "jumlahMasuk"
) => {
  const validator = body(target);

  if (optional) {
    validator.optional();
  }

  validator.exists().withMessage("Field harus tersedia!").bail();
  validator.notEmpty().withMessage("Field tidak boleh kosong.").bail();
  validator
    .isInt({ min: 0 })
    .withMessage("Format harus bilangan bulat minimum 0.")
    .bail();

  return validator;
};

const TransaksiTanggalValidator = (optional = false, target = "tanggal") => {
  const validator = body(target);

  if (optional) {
    validator.optional();
  }

  validator.exists().withMessage("Field harus tersedia!").bail();
  validator.notEmpty().withMessage("Field tidak boleh kosong.").bail();
  validator
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage("Format harus berbentuk YYYY-MM-DD.")
    .bail();

  return validator;
};

module.exports = {
  TransaksiIDValidator,
  TransaksiNomorReferensiValidator,
  TransaksiJumlahKeluarValidator,
  TransaksiJumlahMasukValidator,
  TransaksiTanggalValidator,
};
