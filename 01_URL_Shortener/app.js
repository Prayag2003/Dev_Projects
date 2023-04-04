const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 3000;

const shortUrl = require("./models/schema");

mongoose.connect("mongodb://127.0.0.1:27017/URL_Shortener", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Successful Connection to Database`);
}).catch(e => {
    console.log(e);
})


app.set("view engine", "ejs");

const viewsPath = path.join(__dirname, "../views");
app.set("views", viewsPath);

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const short = await shortUrl.find();
    res.render("index", { short: short });
})

app.post("/shortUrls", async (req, res) => {
    await shortUrl.create({ full: req.body.fullUrl })
    res.redirect("/");
})

app.get("/:shortUrl", async (req, res) => {
    await shortUrl.findOne(req.params.shortUrl)
})

app.listen(port, () => {
    `Listening to Port ${port}`;
})
