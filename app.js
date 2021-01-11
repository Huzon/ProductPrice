const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { render } = require("ejs");
const app = express();




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "productprices"
});

// var brands = [];

con.connect();

let route = 'login';

app.get(`${route}`, (req, res) => {
    res.send(`${route}`);
} );

app.get("/", (req, res) => {
    con.query("SELECT * FROM brand", (err, rows, fields) => {
        if (err)
            console.log(err);

        else if (rows.length > 0) {
            console.log("has vaues");
            var brands = rows;
        }
        var products
        brands.forEach(brand => {
            console.log(`this is ${brand.name}`);
            con.query(`SELECT * FROM prodprice where brandID =${brand.brandID}`, (err, rows, fields) => {
                if (err)
                    console.log(err);
                else if (rows.length > 0) {

                    // console.log(brand.name + " " + rows[0].name);
                    // console.log("has vaues");
                }
            });
        });

    });
});
// 
// app.post("/brandForm", (req, res) => {
//     console.log(req.body.);
// });




// app.get("/", (req, res) => {

// });




app.listen("3000", () => {
    console.log("Connected to server 3000");
});