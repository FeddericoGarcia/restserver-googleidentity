const { Schema, model } = require("mongoose");

const RoleSchema = Schema({
    type: String,
});

module.exports = model("Role", RoleSchema);