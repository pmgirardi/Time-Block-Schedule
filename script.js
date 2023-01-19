// Variables 
var currentHour =  dayjs().hour() 
var timeBlockEl = document.querySelector('.container');

// Display the current date and time using id of "currentDay" and day.js to format date
var currentDate = dayjs().format('dddd, MMMM D'); 
$('#currentDay').text(currentDate);


// Event listener 
$('.saveBtn').on('click', function () {

  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');


  localStorage.setItem(time, value);
});

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


function timeTracker() {
  $('.time-block').each(function () {
    var timeId = $(this).attr("id").split("hour")[1];
    console.log("currentHour " + currentHour)
    console.log("timeId " + timeId)

    if (timeId < currentHour) {
        $(this).addClass("past");
    }
    else if (timeId == currentHour) {
        $(this).addClass("present");
    }
    else {
        $(this).addClass("future");
    }
})
}

// Call timeTracker function 

timeTracker();
