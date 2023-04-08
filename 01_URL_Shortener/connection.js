const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/URL_Shoterner",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successful Connection to the DataBase");
    }).catch(e => {
        console.log(e);
    })
