//Initialize the clock when the window loads.
window.onload = function(){
  //request focus to div
  // document.getElementById("container").focus();
  //start the clock on load.
  initializeClock('clock',nextFiveMinutes());
}

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
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock(){

    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total<=0){
      clearInterval(timeinterval);
      //go to Success page
    }
  }

  updateClock(); // run function once at first to avoid delay

  //setInterval to calculate the remaining time each second
  timeinterval = setInterval(updateClock,1000);
}
