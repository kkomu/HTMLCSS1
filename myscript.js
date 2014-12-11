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
    
    var tblFacts = document.getElementById("tblFacts");
    
    if(localStorage) {
        // Read object from local storage and parse JSON back to object
        var stringObject = localStorage.getItem("FactDetails");
        // Make sure there's data in local storage to read
        if(stringObject != null) {
            var realObject = JSON.parse(stringObject);

            console.log(realObject);

            // Loop realObject and insert new rows to table accordingly
            for(i=0; i<realObject.fact.length; i++) {
                var rowCount = tblFacts.rows.length;
                var row = tblFacts.insertRow(rowCount);

                // Insert new <td> elements at the end of the new <tr>
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                // Add some text to the new cells:
                cell1.innerHTML = realObject.fact[i];
                cell2.innerHTML = realObject.details[i];
            }
        }
    }
    
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.onclick = function(event) {
        console.log(event);

        // Read text fields and save data to object
        var txtFact = document.getElementById("txtFact");
        var txtDetails = document.getElementById("txtDetails");
        factObject.fact.push(txtFact.value);
        factObject.details.push(txtDetails.value);

        // Clear text fields
        txtFact.value = "";
        txtDetails.value = "";

        console.log(factObject);

        // Save object to localStorage as JSON
        if(localStorage) {
            localStorage.setItem("FactDetails",JSON.stringify(factObject));
        }
    }

    // Get weather information using AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleResponse;
    xhr.open('GET','http://api.openweathermap.org/data/2.5/weather?q=Oulu,fi',true);
    xhr.send();
}

// Handle response from weather service
function handleResponse(event) {
    if(event.target.readyState == 4 && event.target.status == 200) {
        // Parse JSON back to Object
        var response = event.target.responseText;
        console.log(response);
        var parsed = JSON.parse(response);
        console.log(parsed);
        
        // Create HTML elements for weather information
        var weatherArticle = document.getElementById("weather");
        var weatherDiv = document.createElement("div");
        var weatherPara1 = document.createElement("p");
        var weatherPara2 = document.createElement("p");
        
        // Add content to elements
        weatherPara1.innerHTML = "Sää paikassa " + parsed.name;
        weatherPara1.style.fontWeight = "bold";
        weatherPara2.innerHTML = "Lat: " + parsed.coord.lat + " Lon: " + parsed.coord.lon;
        weatherPara2.innerHTML += " Description: " + parsed.weather[0].description;
        weatherPara2.innerHTML += " Temp max: " + parsed.main.temp_max + " Temp min: " + parsed.main.temp_min;
        weatherDiv.appendChild(weatherPara1);
        weatherDiv.appendChild(weatherPara2);
        weatherArticle.appendChild(weatherDiv);
    }
}