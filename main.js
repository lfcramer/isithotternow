window.onload = function(){

    // Get API for temp today
    
    //More notes here
   // https://api.darksky.net/forecast/3c45ed24ed5c018c7ee15ecabcfe5901/37.8267,-122.4233
    
    var link = "https://api.darksky.net/forecast/"
    
    var key = "3c45ed24ed5c018c7ee15ecabcfe5901"
    
    var loc = "40.742,-73.989"
    
// get ahold of the id and store in variable
// set innerHTML to a string.
function pad(n) { return ("0" + n).slice(-2); }

    var todayTemp;
    var yesterYearTemp;

    
    var today = new Date();
    var date = (today.getFullYear()-30)+'-'+pad((today.getMonth()+1))+'-'+pad(today.getDate());
    console.log(date)
    var now = new Date();
    var currentTime = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
    console.log(currentTime)
    var todayDiv = document.getElementById("today");
    var answerDiv = document.getElementById("answer");
    var yesterYearDiv = document.getElementById("yesterYear");
    

    // DEBUGGING AND TESTING
    todayTemp = 50;
    yesterYearTemp = 49;
    setHeadline();
    setToday(todayTemp);
    setThen(yesterYearTemp);

    //     $.getJSON(link + key + "/" + loc + "?callback=?", function(data){
//         if (data){
//             todayTemp =  data.currently.apparentTemperature;
//             setToday(todayTemp);
//             getYesterYear();
//         }
//         else {
//             console.log("error here");
//         }
//     }) 
    
//     // get api for temp 30 years ago
//     //https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]

//     //   var time = "1989-04-17T12:00:00";
//     var time = date + "T" + currentTime;
//     console.log(time)
//       var timestamp = "608079594";


//     function getYesterYear(){

//         $.getJSON(link + key + "/" + loc + "," + time + "?callback=?", function(data){
//             if (data){
//                 yesterYearTemp = data.currently.apparentTemperature
//                 setThen(yesterYearTemp);                
//                 setHeadline();
//             }
//             else {
//                 console.log("error in yesteryear call");
//             }
//         })
// }
    
    function setToday(temp){
        countUp(temp);
    }
    function setThen(temp){
        yesterYearDiv.innerHTML = Math.floor(temp) + "&deg";
    }

    function setHeadline(){

        
        console.log("today:" + todayTemp);
        console.log("THEN:" + yesterYearTemp);

        if (todayTemp > yesterYearTemp){
            answerDiv.innerHTML = "It's hotter now."
            document.body.style.background = "radial-gradient(755.50px at 50% 50%, #FDE2D2 0%, #FAA8A8 100%)";
    
        }
        else if(todayTemp < yesterYearTemp) {
            answerDiv.innerHTML = "It was hotter then."
            document.body.style.background = "radial-gradient(755.50px at 50% 50%, #D2DEFD 0%, #A8BFFA 100%)";
        }
        else {
            answerDiv.innerHTML = "Sources are fuzzy. Try again later"
        }


    }

    function countUp(temp){
        var counter = 0;
        var count = function(){
            if (counter >= temp ){

            }
            else {
                counter ++;
                todayDiv.innerHTML = counter + "&deg";
                setTimeout(count, 50);
            }
        }
        count();
    }

    
};