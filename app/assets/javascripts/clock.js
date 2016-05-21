//Initialize the clock when the window loads.
$(function () {
  //start the clock on load.
  initializeClock('clock',nextFiveMinutes());
  console.log("started")
});

//TurboLinks Gem require this function below to run some JS function after a page reloads.
//This happens because it makes the application behaves as a single JS application.
$(document).on('page:load', function() {
  //start the clock on load.
  initializeClock('clock',nextFiveMinutes());
  console.log("started")
});

//Function that returns the date for the next 5 minutes.
function nextFiveMinutes(){
  return new Date(Date.parse(new Date()) + 5 * 60 * 1000);
}

//Global timeinterval to clean and restart out of initializeClock function.
var timeinterval = 0;

//function that calculates the time remaining
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  return {
    'total':t,
    'seconds':seconds,
    'minutes':minutes
  };
}

//function to initialize the timer
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var minutes = clock.querySelector('.minutes');
  var seconds = clock.querySelector('.seconds');

  function updateClock(){

    var t = getTimeRemaining(endtime);
    minutes = ('0' + t.minutes).slice(-2);
    seconds = ('0' + t.seconds).slice(-2);
    clock.innerHTML = minutes + ":" + seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
      console.log(Routes.break_path())
      $.post(Routes.break_path(), t);
    }
  }

  updateClock(); // run function once at first to avoid delay

  //setInterval to calculate the remaining time each second
  timeinterval = setInterval(updateClock,1000);
}
