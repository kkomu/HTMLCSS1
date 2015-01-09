exports.data = [];

exports.products = function(req,res) {
    var html = '<ul>';
    for (var i=0; i<exports.data.length; i++) {
        html += '<li>' + exports.data[i].prod_name + " " + exports.data[i].prod_price;
    }
    html += '</ul>'
    res.send(html);

};



var test = "Not visible";