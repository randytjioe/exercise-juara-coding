const {
  Pagination,
  SearchBackend,
  FilterBackend,
  GetOr404,
} = require("../libs/lib.common");
const { ExceptionHandler } = require("../libs/lib.exception");
const { TransaksiModel } = require("./transaksi.model");

async function TransaksiList(req, res) {
  try {
    const result = TransaksiModel.find();
    const search = SearchBackend(req, result, ["nomor", "nama", "satuan"]);
    const filter = FilterBackend(req, search);
    const paging = await Pagination(req, res, filter);
    return res.status(200).json(paging);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res);
  }
}

async function TransaksiCreate(req, res) {
  try {
    const result = await TransaksiModel.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res);
  }
}

async function TransaksiDetail(req, res) {
  try {
    const result = await GetOr404(TransaksiModel, { _id: req.params.id });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res);
  }
}

async function TransaksiDetailByNomor(req, res) {
  try {
    const result = await GetOr404(TransaksiModel, { nomor: req.params.nomor });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res);
  }
}

async function TransaksiUpdate(req, res) {
  try {
    await GetOr404(TransaksiModel, { _id: req.params.id });
    const result = await TransaksiModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res);
  }
}

async function TransaksiDelete(req, res) {
  try {
    await GetOr404(TransaksiModel, { _id: req.params.id });
    await TransaksiModel.findOneAndDelete({ _id: req.params.id });
    return res.status(204).json(null);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res);
  }
}

module.exports = {
  TransaksiList,
  TransaksiCreate,
  TransaksiDetail,
  TransaksiUpdate,
  TransaksiDelete,
  TransaksiDetailByNomor,
};
