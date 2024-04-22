require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoDBConnection } = require("./libs/lib.database");
const { Logging } = require("./libs/lib.logging");
const { ROUTER_BASE_TRANSAKSI } = require("./transaksi/transaksi.config");
const { TransaksiRouter } = require("./transaksi/transaksi.router");

const app = express();

MongoDBConnection();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

/**
 * Logging app
 */
app.use((req, res, next) => {
  // Log an info message for each incoming request
  Logging.info(`Received a ${req.method} request for ${req.url}`);
  return next();
});

app.use(ROUTER_BASE_TRANSAKSI, TransaksiRouter);

module.exports = {
  app,
};
