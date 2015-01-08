window.onload = function (event) {
    "use strict";
    
    // Check if browser supports geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
    }
    
    // Function that's called after successful getCurrentPosition
    function success(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        //console.log(position.coords.latitude);
        //console.log(position.coords.longitude);
        
        var latLng = new google.maps.LatLng(lat,lon);
        
        var myMapOpt = {
            center: latLng,
            zoom: 14
        };
        
        var myMap = document.getElementById("myMap");
        
        var map = new google.maps.Map(myMap, myMapOpt);
        
        var myMarkerOpt = {
            position: latLng,
            map: map
        };
        
        var marker = new google.maps.Marker(myMarkerOpt);
        
        var geoCoder = new google.maps.Geocoder();
                
        /*
        var request = {
            location: latLng
        };
        
        geoCoder.geocode(request,requestHandler);
        */
    }
    /*
    function requestHandler(data) {
        console.log(data);
    }*/
    
    // Function that's called after failed getCurrentPosition
    function fail(error) {
        console.log(error);
    }
    
    
};