$(document).ready(function() {
    var currentDate = moment().format("MMM do YYYY");
    $("#currentDay").html(currentDate);

    // Function section
    function clockHour() {
        var currentTime = moment().hour();

        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Color event for time past/present/future
            if (currentTime < hourBlock) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (currentTime === hourBlock) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass('future');
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // Buttons function section
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // Local Storage section
    $("#firstHour .description").val(localStorage.getItem("firstHour"));
    $("#secondHour .description").val(localStorage.getItem("secondHour"));
    $("#thirdHour .description").val(localStorage.getItem("thirdHour"));
    $("#fourthHour .description").val(localStorage.getItem("fourthHour"));
    $("#fifthHour .description").val(localStorage.getItem("fifthHour"));
    $("#sixthHour .description").val(localStorage.getItem("sixthHour"));
    $("#seventhHour .description").val(localStorage.getItem("seventhHour"));
    $("#eighthHour .description").val(localStorage.getItem("eighthHour"));
    $("#ninthHour .description").val(localStorage.getItem("ninthHour"));

    // call function
    clockHour();
})