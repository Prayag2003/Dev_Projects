const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

require("../01_URL_Shortener/connection");
const URLModel = require("./models/schema");

app.use(express.urlencoded({ extended: false }));
// app.set(express.json());

app.set("view engine", "ejs");
const viewsPath = path.join(__dirname, "../01_URL_Shortener/views");
app.set("views", viewsPath);


app.get("/", async (req, res) => {
    const shorts = await URLModel.find()
    res.render("index", { shorts: shorts });
})

app.post("/newURL", async (req, res) => {
    const getLong = req.body.fullUrl;
    const shortID = generateShortID(getLong);
    try {
        const newFullURL = await new URLModel({
            URL: getLong,
            ShortURL: shortID
        });

        const result = await newFullURL.save();
        res.redirect("/");
    }
    catch (e) {
        res.send("Error " + e);
    }
})
app.get("/:ShortURL", async (req, res) => {
    const shortURL = await URLModel.findOne({ ShortURL: req.params.ShortURL });
    if (shortURL == null) {
        return res.status(404).send("Page Not Found !");
    }
    shortURL.Clicks++;
    shortURL.save();

    res.redirect(shortURL.URL);

})


app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})

const generateShortID = (longURL) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortId = '';
    for (let i = 0; i < 6; i++) {
        shortId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortId;
}