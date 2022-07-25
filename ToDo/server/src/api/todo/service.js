const toDo = require("./todo");

toDo.methods(["get", "post", "put", "delete"]);
toDo.updateOptions({ new: true, runValidators: true });

module.exports = toDo;