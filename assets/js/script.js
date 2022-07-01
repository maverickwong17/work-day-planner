//Current Time
var UpdateTime = function () {
    var newDate = $("#currentDay").text("Current Date and Time : " + moment().format("dddd, MMMM Do YYYY, h:mm:ss"));
}
setInterval(UpdateTime, 1000);

var textArea = $('.description')
var currentHour = moment().format("H")

console.log(textArea)
console.log(currentHour)
function PastPresentFuture() {
    for(var i = 0; i< textArea.length;i++){
        if (textArea[i].dataset.time > currentHour){
            textArea.attr('future')
            // console.log(textArea[i].dataset.time)
            // console.log('future')
        } else if (textArea[i].dataset.time < currentHour){
            textArea.addClass('past')
            // console.log(textArea[i].dataset.time)
            // console.log('past')
        } else {
            textArea.addClass('present')
            // console.log(textArea[i].dataset.time)
            // console.log('present')
        }
console.log(textArea[0].dataset.time)
}
}

PastPresentFuture()