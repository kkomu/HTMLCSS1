// Wait for the document to be loaded
window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ready;
    xhr.open('POST','/json_data',true);
    xhr.setRequestHeader("content-type","application/json");
    // JSON data
    var data = {
        name: 'kyo komu',
        address: 'vihi 41',
        phone: '0400'
    }
    xhr.send(JSON.stringify(data));
    
}

function ready() {
    console.log("ok");
}