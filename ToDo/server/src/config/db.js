const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// removing warning

module.exports = mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
