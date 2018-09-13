$(document).ready(function () {
    $("#catDiv").hide();
    $("#break-time").text("00:00");
});

///////////////////////////////////////////////////////////////
// DEFAULT BREAK TIME
///////////////////////////////////////////////////////////////
$("#break-button").on("click", function () {
    console.log("click");
    $("#break-page").hide();
    $("#break-timer").show();
    var duration = 2;
    breakTimer(duration);
});

$("#catButton").on("click", function () {
    $("#catButton").hide();
    $("#catDiv").show();
});

$("#noCatButton").on("click", function() {
    $("#catDiv").hide();
    $("#catButton").show();
});

function breakTimer(duration) {
    var display = $("#break-time");
    var timer = duration, minutes, seconds;
    var count = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            stop(count);
            window.location.replace("/home");
        }
    }, 1000);
}


///////////////////////////////////////////////////////////////
// ADJUSTED BREAK TIME
///////////////////////////////////////////////////////////////
$("#new-break").on("click", function () {
    $("#break-page").hide();
    $("#adjust-break-page").show();

});

$("#adjust-break-button").on("click", function (event) {
    event.preventDefault();
    $("#adjust-break-page").hide();
    $("#break-timer").show();
    var newDuration = $("#adjust-break").val().trim() * 60;
    console.log(newDuration);
    breakTimer(newDuration);
});

///////////////////////////////////////////////////////////////
// STOP TIMER
///////////////////////////////////////////////////////////////
function stop(clearTimer) {
    clearInterval(clearTimer);
}