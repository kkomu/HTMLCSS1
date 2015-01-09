var express = require('express');
var app = express();

var myModule = require('./mymodule');

var bodyParser = require('body-parser');

// Use 'use' function to take some middleware in use
app.use('/', express.static(__dirname + '/public'));

// Creates a body-object for post methods
app.use(bodyParser());


// Define routers. ! Always after middleware !
app.get('/products', myModule.products);

app.get('/add_product', function(req,res) {
    res.sendFile(__dirname + '/public/add_product.html');

});

app.post('/product_info', function(req,res) {
    console.log(req.body);
    myModule.data.push(req.body);
    res.redirect('/');

});

app.post('/json_data', function(req,res) {
    console.log(req.body);
    res.send('OK');

});


app.listen(3000);