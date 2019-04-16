window.onload = function(){

    // Get API for temp today
    
    //More notes here
    https://api.darksky.net/forecast/3c45ed24ed5c018c7ee15ecabcfe5901/37.8267,-122.4233
    
    var link = "https://api.darksky.net/forecast/"
    
    var key = "3c45ed24ed5c018c7ee15ecabcfe5901"
    
    var loc = "40.742,-73.989"
    
// get ahold of the id and store in variable
// set innerHTML to a string.

    var todayTemp;
    var yesterYearTemp;

var todayDiv = document.getElementById("today");
    
    $.getJSON(link + key + "/" + loc + "?callback=?", function(data){
        if (data){
            todayTemp =  data.currently.apparentTemperature;
            todayDiv.innerHTML = Math.floor(todayTemp);            
            getYesterYear();
        }
        else {
            console.log("error here");
        }
        
        // if fails, do error
    }) 
    
    // get api for temp 30 years ago
    //https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]

      var time = "1989-07-16T14:00:00";
      var timestamp = "608079594";
      var yesterYearDiv = document.getElementById("yesterYear");

    function getYesterYear(){

        $.getJSON(link + key + "/" + loc + "," + time + "?callback=?", function(data){
            if (data){
                yesterYearTemp = data.currently.apparentTemperature
                yesterYearDiv.innerHTML = Math.floor(yesterYearTemp);

                updateUI();
            }
            else {
                console.log("error in yesteryear call");
            }
        })
}
    
    // if today > 30 years ago;
    //     print yes
    //     change background warm
    var answerDiv = document.getElementById("answer");

    function updateUI(){
        
        console.log("today:" + todayTemp);
        console.log("THEN:" + yesterYearTemp);

        if (todayTemp > yesterYearTemp){
            answerDiv.innerHTML = "It's hotter now."
            $("html").css("background-color","red");
        }
        else if(todayTemp < yesterYearTemp) {
            answerDiv.innerHTML = "It was hotter then."
            $("html").css("background-color","blue");
        }
        else {
            answerDiv.innerHTML = "Sources are fuzzy. Try again later"
        }
    }

    // else 
    //     print no
    //     change background cool
};