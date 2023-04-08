const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    URL: {
        type: String,
        required: true,
    },
    ShortURL: {
        type: String,
        required: true,
    },
    Clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

const URLModel = mongoose.model("URLModel", schema);

module.exports = URLModel;