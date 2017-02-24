import {Express, Request, Response, NextFunction} from "express-serve-static-core";

let express = require("express");
let fortune = require( "./lib/fortune");

let app: Express        = express();
let handlebars: Exphbs   = require("express-handlebars")
                                .create({
                                    defaultLayout: "main",
                                    helpers: {
                                        section: function(name, options){
                                            if (!this._sections) this._sections = {};
                                            this._sections[name] = options.fn(this);
                                            return null;
                                        }
                                    }
                                });

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

    app.use(express.static(__dirname + "/public"));

    app.use(
        (req: Request, res: Response, next: NextFunction) => {
            res.locals.showTests = app.get("env") !== "production" &&
                    req.query.test === "1";
            next();
        }
    );

    app.get("/",
            (req: Request, res: Response) => {
                                      //  res.type('text/plain');
                                      //  res.send('WOW!');
                                        res.render("home");
            }
        );

    app.get("/about",
        (req: Request, res: Response) => {
                                       // res.type('text/plain');
                                       // res.send('Ob compamy!');
                                       // let randomeFortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
                                        res.render("about", {
                                                fortune:    fortune.getFortune(),
                                                pageTestScript: "/qa/tests-about.js"
                                        });
        }
    );
    app.get("/tours/hood-river",
        (req: Request, res: Response) =>
                                        res.render("tours/hood-river"));

    app.get("/tours/request-group-rate",
        (req: Request, res: Response) =>
                                        res.render("tours/request-group-rate"));


    app.use(
        (req: Request, res: Response, next: NextFunction) => {
                                        // res.type('text/plain');
                                        res.status(404);
                                        // res.send('404 - Ne naideno!');
                                        res.render("404");
        }
    );

    app.use(
            (err: any, req: Request, res: Response, next: NextFunction) => {
                                            console.error(err.stack);
                                            // res.type('text/plain');
                                            res.status(500);
                                            res.render("500");
                                            // res.send('500 - errorssss');
            }
    );

app.listen(app.get("port"), () => {
    console.log(`Express started: ${app.get("port")}`);
    });



