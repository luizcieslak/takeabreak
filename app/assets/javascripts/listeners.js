//function called when a mouse, keyboard event occurs
function resetTimer(){
  clearInterval(timeinterval);
  initializeClock('clock',nextFiveMinutes());
}

function mouseClick(e){
  resetTimer();

  var alert = document.getElementById("alert");
  alert.innerHTML = "I know that you are clicking your mouse!";
  //Code to restart the animation each time that the function is called.
  var newone = alert.cloneNode(true);
  alert.parentNode.replaceChild(newone, alert);

  var alert2 = document.getElementById("secondAlert");
  alert2.innerHTML = "Carai";
}

function keyboardPress(e){
    resetTimer();
    var alert = document.getElementById("alert");
    alert.innerHTML = "Leave your keyboard off for a time";
    //Code to restart the animation each time that the function is called.
    var newone = alert.cloneNode(true);
    alert.parentNode.replaceChild(newone, alert);
}

function lostFocus(){
    resetTimer();

    var alert = document.getElementById("alert");
    alert.innerHTML = "Stay here!";
    //Code to restart the animation each time that the function is called.
    var newone = alert.cloneNode(true);
    alert.parentNode.replaceChild(newone, alert);
}


//code for detecting lost windows focus using Page Visiblity API.
function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];

    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';

    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document)
            return prefixes[i] + 'Hidden';
    }

    // otherwise it's not supported
    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;

    return document[prop];
}

// use the property name to generate the prefixed event name
var visProp = getHiddenProp();
if (visProp) {
  var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
  document.addEventListener(evtname, visChange);
}

function visChange() {
      if (isHidden()){
        clearInterval(timeinterval);
      }
      else{
        initializeClock('clock',nextFiveMinutes());
        lostFocus();
      }

}
