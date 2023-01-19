
$(function () {

// Variables 
var saveButtonEl = $('.saveBtn');

var currentHour = $('dayjs().hour()');

// Display the current date and time using id of "currentDay" and day.js to format date
var currentDate = dayjs().format('dddd, MMMM D'); 
$('#currentDay').text(currentDate);

// Event listener 
saveButtonEl.on('click', function () {
  var textValue = $(this).siblings('.description').val();
  var timeKey = $(this).parent().attr('id');

  localStorage.setItem(timeKey, textValue);
});

$('#hour-9.description').val(localStorage.getItem('hour-9'));
$('#hour-10.description').val(localStorage.getItem('hour-10'));
$('#hour-11.description').val(localStorage.getItem('hour-11'));
$('#hour-12.description').val(localStorage.getItem('hour-12'));
$('#hour-13.description').val(localStorage.getItem('hour-13'));
$('#hour-14.description').val(localStorage.getItem('hour-14'));
$('#hour-15.description').val(localStorage.getItem('hour-15'));
$('#hour-16.description').val(localStorage.getItem('hour-16'));
$('#hour-17.description').val(localStorage.getItem('hour-17'));

// jkjlkdf 

function timeTracker() {
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    


}
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  