var mongoose = require('mongoose');

var uri = "mongodb://localhost/courses";

// Try to connect
mongoose.connect(uri,function(err,suc) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Nicely connected to " + uri);
    
    }
});

// var courses = new mongoose.Schema( TAI
var Schema = mongoose.Schema;
var courses = new Schema({
    name: {type: String, index: {unique: true}},
    duration: Number,
    description: String,
    participants: Number,
    startingDate: Date,
    endingDate: Date
});

var courseObj = mongoose.model("Course",courses);

exports.addCourse = function(req,res){
    console.log(req.body);
    
    var temp = new courseObj({
        name: req.body.name,
        duration: parseInt(req.body.duration),
        description: req.body.description,
        participants: parseInt(req.body.participants),
        startingDate: new Date(req.body.startingDate),
        endingDate: new Date(req.body.endingDate)
    });
    
    temp.save(function(err) {
        if(err) {
            console.log("Ei onnistu 1!");
            res.render('myerror',{});
        }
        else {
            console.log("OK");
            res.redirect('/');
            //res.status(301);
            //res.setHeader('location','http://localhost:3000');
            //res.send();
        }
    });
}

exports.getCourses = function(req,res) {
    courseObj.find(function(err,data) {
        if(err) {
            console.log("Ei onnistu 2!");
            res.render('myerror', {});
        }
        else {
            res.render('index',{course_data:data});
        }
    });
}

exports.getCourseInfo = function(req,res) {
    console.log(req.query.id);
    courseObj.findById(req.query.id, function(err, data) {
        if(err) {
            console.log("Ei onnistu 3!");
            res.render('myerror',{});
        }
        else {
            console.log(data);
            res.render('courseinfo',data);
        }
    });
}

exports.deleteCourse = function(req,res) {
    console.log("WTF?");
    courseObj.findById(req.query.id, function(err,data) {
        if(err) {
            console.log("Ei onnistu 4!");
            res.render('myerror',{});
        }
        else {
            data.remove(function(err) {
                if(err) {
                    console.log("Ei onnistu 5!");
                    res.render('myerror',{});
                }
                else {
                    console.log("OK");
                    res.redirect('/');
                }
                
            });
        }
        
    });


}