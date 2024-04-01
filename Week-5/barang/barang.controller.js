const { BarangModel } = require("./barang.model");

async function BarangList(req, res) {
  try {
    const data = await BarangModel.find();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function BarangCreate(req, res) {
  try {
    const data = req.body;
    const result = await BarangModel.create(data);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function BarangDetail(req, res) {
  try {
    const data = await BarangModel.findOne({ _id: req.params.id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function BarangUpdate(req, res) {
  try {
    const data = await BarangModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function BarangDelete(req, res) {
  try {
    await BarangModel.findOneAndDelete({ _id: req.params.id });
    return res.status(204).json(null);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

module.exports = {
  BarangList,
  BarangCreate,
  BarangDetail,
  BarangUpdate,
  BarangDelete,
};
