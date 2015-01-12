var mongoose = require('mongoose');

var uri = "mongodb://localhost/courses";

// Try to connect
mongoose.connect(uri,function(err,suc) {
    if(err) {
        console.log("Error: " + err);
    }
    else {
        console.log("Nicely connected to " + uri);
    
    }
});