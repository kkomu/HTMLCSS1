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

// Schema & model for user information
var userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
});
userSchema.plugin(uniqueValidator);
var userModel = mongoose.model("Users", userSchema);

// Schema & model for user's contact information
var contactSchema = new mongoose.Schema({
    user: String,
    name: {type: String, required: true},
    address: String,
    email: String,
    phone: String,
    birthday: Date,
    general: String
});
var contactModel = mongoose.model("Contacts", contactSchema);

exports.login = function(req,res) {
    console.log(req.body.username);
    console.log(req.body.password);
    userModel.find({name: req.body.username}, function(err, data) {
        if(err || (data[0] == null)) {
            console.log("Ei onnistu 3!");
            res.render('error',{});
        }
        else {
            console.log("DATA:");
            console.log(data);
            
            if(data[0].password == req.body.password) {
                req.session.username = req.body.username;
                res.redirect('/contacts');
            }
            else {
                res.render('error',{});
            }
        }
        
    });
}

exports.contacts = function(req,res) {
    if(req.session.username) {
        // Luetaan kontaktit db:stä
        contactModel.find({user: req.session.username}, function(err, data) {
        if(err) {
            console.log("Ei onnistu 3!");
            res.render('error',{});
        }
        else {
            console.log(data);
            res.render('contacts2',{contact_data:data});
        }
    });
        
        
        
    }
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

exports.saveContact = function(req, res) {
    console.log(req.body);
    
    var contact = new contactModel({
        user: req.session.username,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phonenumber,
        birthday: new Date(req.body.birthday),
        general: req.body.general
    });
    
    contact.save(function(err) {
        if(err) {
            console.log("Ei onnistu");
        }
        else {
            console.log("OK");
            res.redirect('/contacts');
        }
    
    });
}
    
exports.logout = function(req, res) {
    delete req.session.username
    res.redirect('/');
}
    
