"use strict";
let express = require("express");
let fortune = require("./lib/fortune");
let app = express();
let handlebars = require("express-handlebars")
    .create({
    defaultLayout: "main",
    helpers: {
        section: function (name, options) {
            if (!this._sections)
                this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    res.locals.showTests = app.get("env") !== "production" &&
        req.query.test === "1";
    next();
});
app.get("/", (req, res) => {
    //  res.type('text/plain');
    //  res.send('WOW!');
    res.render("home");
});
app.get("/about", (req, res) => {
    // res.type('text/plain');
    // res.send('Ob compamy!');
    // let randomeFortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
    res.render("about", {
        fortune: fortune.getFortune(),
        pageTestScript: "/qa/tests-about.js"
    });
});
app.get("/tours/hood-river", (req, res) => res.render("tours/hood-river"));
app.get("/tours/request-group-rate", (req, res) => res.render("tours/request-group-rate"));
app.use((req, res, next) => {
    // res.type('text/plain');
    res.status(404);
    // res.send('404 - Ne naideno!');
    res.render("404");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    // res.type('text/plain');
    res.status(500);
    res.render("500");
    // res.send('500 - errorssss');
});
app.listen(app.get("port"), () => {
    console.log(`Express started: ${app.get("port")}`);
});
