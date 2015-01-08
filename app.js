var express = require('express');
var app = express();
var secret = require('./modules/secret.js');

app.use('/',express.static(__dirname + '/public'));

app.get('/names',secret.secrets);

console.log(secret.realSecret);

/*
app.get('/',function(req,res) {
    res.sendfile("public/index.html");

});*/


/*
var fs = fs();

app.get('/', function (req, res) {
    //res.type('text/html');
    //res.sendfile('index.html');
    //res.render('index.html');
     fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
        res.send(text);
    });
})

app.get('/products', function (req, res) {
  res.send('Wello Horld');
})
*/

//app.use(express.static(__dirname + '/'));

app.listen(3000);