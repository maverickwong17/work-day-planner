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

var currentHour = 11//moment().format("H")

function timeCheck(time, timebox) {
    if(time > currentHour){
        timebox.addClass("future")
    }else if(time < currentHour){
        timebox.addClass("past")
    }if(time == currentHour){
        timebox.addClass("present")
    }
}

timeCheck(9 , timeNine)
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
    console.log("saved")
    var targetButton = event.target
    saveItem = $(this).siblings("textarea").val()
    console.log(saveItem)
    localStorage.setItem(targetButton.id, saveItem)
}

function getLocalStorage(){

}