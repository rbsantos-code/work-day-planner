$(document).ready(function() {
    var currentDate = moment().format("MMM do YYYY");
    $("#currentDay").html(currentDate);

    // Function section
    function clockHour() {
        var currentTime = moment().hour();

        $(".time-block").each(function() {
            var hourBlock = parseInt($(".time-block").attr("id").split("Hour")[1]);

            // Color event for time past/present/future
            if (hourBlock < currentTime) {
                $(".time-block").addClass("past");
                $(".time-block").removeClass("present");
                $(".time-block").removeClass("future");
            }
            else if (hourBlock === currentTime) {
                $(".time-block").removeClass("past");
                $(".time-block").addClass("present");
                $(".time-block").removeClass('future');
            } else {
                $(".time-block").removeClass("past");
                $(".time-block").removeClass("present");
                $(".time-block").addClass("future");
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