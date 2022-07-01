//set times text area to variables from ids
var timeNine = $("#9");
var timeTen = $("#10");
var timeEleven = $("#11");
var timeTwelve = $("#12");
var timeOne = $("#13");
var timeTwo = $("#14");
var timeThree = $("#15");
var timeFour = $("#16");
var timeFive = $("#17");
var timeSix = $("#18");

//Current Time
var UpdateTime = function () {
    var newDate = $("#currentDay").text("Current Date and Time : " + moment().format("dddd, MMMM Do YYYY, h:mm"));
}
setInterval(UpdateTime, 1000);

var currentHour = moment().format("H")

function timeCheck(time, timebox) {
    if(time > currentHour){
        timebox.addClass("future")
    }else if(time < currentHour){
        timebox.addClass("past")
    }if(time == currentHour){
        timebox.addClass("present")
    }
}

timeCheck(09 , timeNine)
timeCheck(10 , timeTen)
timeCheck(11 , timeEleven)
timeCheck(12 , timeTwelve)
timeCheck(13 , timeOne)
timeCheck(14 , timeTwo)
timeCheck(15 , timeThree)
timeCheck(16 , timeFour)
timeCheck(17 , timeFive)
timeCheck(18 , timeSix)

//save
var button = $('.btn')

button.on('click', save )

function save(event){
    var targetButton = event.target
    var saveItem = $(this).siblings("textarea").val()
    if (saveItem === ""){
        console.log("Need Text box fill")
    } else {
    console.log(saveItem)
    localStorage.setItem(targetButton.id, saveItem)
}
}

function refresh(){
    timeNine.text(localStorage.getItem("button9"))  
    timeTen.text(localStorage.getItem("button10"))  
    timeEleven.text(localStorage.getItem("button11"))  
    timeTwelve.text(localStorage.getItem("button12"))  
    timeOne.text(localStorage.getItem("button13"))  
    timeTwo.text(localStorage.getItem("button14"))  
    timeThree.text(localStorage.getItem("button15"))  
    timeFour.text(localStorage.getItem("button16"))  
    timeFive.text(localStorage.getItem("button17"))  
    timeSix.text(localStorage.getItem("button18"))  
}
refresh()
// function getLocalStorage(button){
//     localStorage.getItem(button)
// }
// getLocalStorage(button9)
// timeNine.text = getLocalStorage(button9)