const { CustomerModel } = require("./customer.model");

async function CustomerList(req, res) {
  try {
    const data = await CustomerModel.find();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function CustomerCreate(req, res) {
  try {
    const data = req.body;
    const result = await CustomerModel.create(data);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function CustomerDetail(req, res) {
  try {
    const data = await CustomerModel.findOne({ _id: req.params.id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

async function CustomerUpdate(req, res) {
  try {
    const data = await CustomerModel.findOneAndUpdate(
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

async function CustomerDelete(req, res) {
  try {
    await CustomerModel.findOneAndDelete({ _id: req.params.id });
    return res.status(204).json(null);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ detail: "Ups error" });
  }
}

module.exports = {
  CustomerList,
  CustomerCreate,
  CustomerDetail,
  CustomerUpdate,
  CustomerDelete,
};
