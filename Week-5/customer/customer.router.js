const express = require("express");
const {
  CustomerList,
  CustomerCreate,
  CustomerDetail,
  CustomerUpdate,
  CustomerDelete,
} = require("./customer.controller");

const CustomerRouter = express.Router();

CustomerRouter.get("/", CustomerList);
CustomerRouter.post("/", CustomerCreate);
CustomerRouter.get("/:id", CustomerDetail);
CustomerRouter.put("/:id", CustomerUpdate);
CustomerRouter.delete("/:id", CustomerDelete);

module.exports = {
  CustomerRouter,
};
