var express = require('express');
var app = express();

app.use('/',express.static(__dirname + '/public'));

app.get('/names',function(req,res) {
    res.send('The secret names are: Pete, MacGyver and Jack!');
});

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