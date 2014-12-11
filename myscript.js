window.onload = function(event) {
    var btnZoom = document.getElementById("btnZoom");
    
    btnZoom.onclick = function(event) {
        console.log(event);
        var myArea = document.getElementById("londoner");
        if(myArea.style.fontSize != "20px") {
            myArea.style.fontSize = "20px";
           }
        else {
           myArea.style.fontSize = "16px";
           }
    };
    
    var factObject = {
        fact: [],
        details: []
    }
    
    var btnSubmit = document.getElementById("btnSubmit");
    
    btnSubmit.onclick = function(event) {
        console.log(event);
        
        var txtFact = document.getElementById("txtFact");
        var txtDetails = document.getElementById("txtDetails");
        factObject.fact.push(txtFact.value);
        factObject.details.push(txtDetails.value);
        
        console.log(factObject);
        
        var tblFacts = document.getElementById("tblFacts");
        var rowCount = tblFacts.rows.length;
        var row = tblFacts.insertRow(rowCount);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        
        var factObjLength = factObject.fact.length-1;
        
        // Add some text to the new cells:
        cell1.innerHTML = factObject.fact[factObjLength];
        cell2.innerHTML = factObject.details[factObjLength];
        
        txtFact.value = "";
        txtDetails.value = "";
        
    };
    
};