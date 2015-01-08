exports.secrets = function(req,res) {
    var html="<h1>Let me tell you a secret</h1>";
    res.send(html);
};

var realSecret = "This I won't tell to anyone";