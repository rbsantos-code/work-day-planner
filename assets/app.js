$(document).ready(function() {
    var currentDate = moment().format("MMM do YYYY");
    $("#currentDay").html(currentDate);

    // Function section
    function clockHour() {
        var currentTime = moment().hour();

        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
            console.log(hourBlock)
            // console.log to see if I am getting an integer and not "Nan"

            // Color event for time past/present/future
            // Got assistance with tutor for this section
            if (hourBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (hourBlock === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // Buttons function section
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
       

        localStorage.setItem(time, text);
    })

    // Local Storage section
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));

    // call function
    clockHour();
})