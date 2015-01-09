window.onload = function(event) {
    console.log(event);
    var myId = document.getElementById("anim");
    myId.onclick = handleClick;
    
    // Example of JS object literal
    var data = {
        name: "Kyösti",
        address: "Vihi 41",
        email: String,
        genderMale: Boolean,
        phoneNumbers: []
    };
    
    data.name = "Itsöyk";
    data.address = "14 ihiv";
    data.email = "kkomu@gmail.com";
    data.genderMale = true;
    data.phoneNumbers[0] = "23324234234";
    data.phoneNumbers[1] = "11111111111";
    
    console.log(data);
    
    function Cat() {
        this.name = "Milli";
        this.age = 12;
    }
    
    var munKissa = new Cat();
    console.log(munKissa.name);
    console.log(munKissa.age);

    function Shape() {
        var weight = 10;
        var height = 10;
    }
    console.log(Shape.weight);
    
    var index = 0;
    
    if(localStorage) {
        ///index = localStorage.getItem("index");
        localStorage.setItem("PersonInfo",JSON.stringify(data));
    
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleResponse;
    xhr.open('GET','data.txt',true);
    xhr.send();
    
    
}     

function handleResponse(event) {
    if(event.target.readyState == 4 && event.target.status == 200) {
        textData.value = event.target.responseText;
    
    }

}

function handleClick(event) {
    console.log(event);
    //myId.style.opacity = "0.5";
    //event.target.style.opacity = "0.5";
    var myAudio = document.createElement("audio");
    myAudio.controls = true;
    var mySource = document.createElement("source");
    mySource.src = "little_britain_eh_eh.mp3";
    mySource.type = "audio/mpeg";
    myAudio.appendChild(mySource);
    event.target.appendChild(myAudio);
    
    var person = JSON.parse(localStorage.getItem("PersonInfo"));
    console.log(person);
}
            
            