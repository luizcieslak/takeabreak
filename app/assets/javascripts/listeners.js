//function called when a mouse, keyboard event occurs
function resetTimer(){
  clearInterval(timeinterval);
  initializeClock('clock',nextFiveMinutes());
}

function advice(){
  var phrases = [
    "\"Take rest; a field that has rested gives a bountiful crop.\" <br>- Publius Ovidius Naso",
    "\"For fast-acting relief, try slowing down.\" <br>- Lily Tomlin",
    "\"Sometimes the most productive thing you can do is relax.\"<br>- Mark Black",
    "Organize your thoughts for a while.",
    "Take deep breaths."
  ]
  return phrases[Math.floor(Math.random() * phrases.length)]
}

function mouseClick(e){
  resetTimer();

  var alert = document.getElementById("alert");
  alert.innerHTML = "I know that you are clicking your mouse!";
  //Code to restart the animation each time that the function is called.
  var newone = alert.cloneNode(true);
  alert.parentNode.replaceChild(newone, alert);

  var alert2 = document.getElementById("alert2");
  alert2.innerHTML = advice();
  newone = alert2.cloneNode(true);
  alert2.parentNode.replaceChild(newone,alert2);
}

function keyboardPress(e){
    resetTimer();
    var alert = document.getElementById("alert");
    alert.innerHTML = "Leave your keyboard off for a time";
    //Code to restart the animation each time that the function is called.
    var newone = alert.cloneNode(true);
    alert.parentNode.replaceChild(newone, alert);

    var alert2 = document.getElementById("alert2");
    alert2.innerHTML = advice();
    newone = alert2.cloneNode(true);
    alert2.parentNode.replaceChild(newone,alert2);
}

function lostFocus(){
    resetTimer();

    var alert = document.getElementById("alert");
    alert.innerHTML = "Stay here!";
    //Code to restart the animation each time that the function is called.
    var newone = alert.cloneNode(true);
    alert.parentNode.replaceChild(newone, alert);

    var alert2 = document.getElementById("alert2");
    alert2.innerHTML = advice();
    newone = alert2.cloneNode(true);
    alert2.parentNode.replaceChild(newone,alert2);
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
