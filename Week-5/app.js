const express = require("express");
const { BarangRouter } = require("./barang/barang.router");
const { ROUTER_BASE_BARANG } = require("./barang/barang.config");
const { MongoDBConnection } = require("./libs/lib.database");
const { CustomerRouter } = require("./customer/customer.router");
const { ROUTER_BASE_CUSTOMER } = require("./customer/customer.config");

const app = express();

MongoDBConnection();

app.use(express.json());

app.use(ROUTER_BASE_BARANG, BarangRouter);
app.use(ROUTER_BASE_CUSTOMER, CustomerRouter);

module.exports = {
  app,
};
