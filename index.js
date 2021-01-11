const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cors = require('cors');

//requirements
app.set('view engine', 'ejs');
app.use(express.json({ extended: false}));
app.use(express.static('views'));
app.use(express.urlencoded({extended: false}));

let route = 'login';

const brands = [
    {
        _id: 101,
        name: "samsung"
    },
    {
        _id: 102,
        name: "apple"
    },
    {
        _id : 103,
        name: "oppo"
    }

];

const product = [{
    _id: 201,
    name: "iPhone XS",
    brandID: 102,
    price: 70000
},
{
    _id: 202,
    name: "iPhone SE",
    brandID: 102,
    price: 40000
},
{
    _id: 203,
    name: "Galaxy S9",
    brandID: 103,
    price: 40000
},
{
    _id: 204,
    name: "Galaxy S20",
    brandID: 102,
    price: 80000
}
];


app.get(`/${route}`,(req, res) => {
    res.render('index.ejs', {data : {brands : brands}, data2: {products : product}});
});

let btn_;

app.post('/login/1', (req, res) => {
        let { brand_name } = req.body;
        btn_ = brand_name; 
        console.log(brand_name);
        res.redirect(`http://localhost:3000/${btn_}`);
});

app.get(`/:btn_`, async (req, res) => {
    //sql database2
    let sql_data;
    //await let sql_data = con.sql_query
    res.send(`${btn_}`, {data2:sql_data});
    console.log(btn_);
});

app.get('/home', (req, res) => {
    res.render('some');
});

app.get('/', (req, res) => {
    res.send();
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});