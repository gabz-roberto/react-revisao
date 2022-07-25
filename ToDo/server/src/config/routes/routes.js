const express = require("express");

module.exports = (app) => {
  const router = express.Router();
  app.use("/api", router);

  const service = require("../../api/todo/service");
  service.register(router, "/todos");
};
