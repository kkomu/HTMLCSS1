var mongoose = require('mongoose');

// https://www.npmjs.com/package/mongoose-unique-validator
var uniqueValidator = require('mongoose-unique-validator');

var uri = "mongodb://localhost/addressbook/users";

// Try to connect
mongoose.connect(uri,function(err,suc) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Nicely connected to " + uri);
    
    }
});

var userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

var userModel = mongoose.model("Users",userSchema);

exports.login = function(req,res) {
    console.log("login");
}

exports.register = function(req,res) {
    //console.log(req.body);
    var user = new userModel({
        name: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    console.log(user);

    user.save(function (err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("OK");
            res.redirect('/');
        }
    });
}