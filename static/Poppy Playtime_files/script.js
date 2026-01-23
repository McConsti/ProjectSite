var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// v2.0

var currentCamKey = 0;

// get the camera data from the json file
var cameraData = JSON.parse(cameras);

var timeElement;
var imageElement;
var staticElement;
var nameElement;

// init the element variables upon the page loading up
function init() {
  // init the element variables once the page is loaded
  imageElement = document.getElementById('camera-image');
  staticElement = document.getElementById('camera-static');
  timeElement = document.getElementById('camera-time');
  nameElement = document.getElementById('camera-name');

  setCameraImageAndName(0);

  // set the cameras to camera key 0
  setCameraImageAndName(0);


  setInterval(() => {updateTime()}, 87);
}

// run this every time the screen gets clicked
function changeCameraScreen() {
  // increment through the cameras and make sure it loops
  currentCamKey = (currentCamKey + 1) % cameraData.length;

  // reset the animation for the screen filters and change the camera
  imageElement.style.animation = 'none';
  imageElement.offsetHeight;
  imageElement.style.animation = null;

  // reset the static flash animation upon screen change
  staticElement.style.animation = 'none';
  staticElement.offsetHeight;
  staticElement.style.animation = null;

  // set the camera name
  setCameraImageAndName(currentCamKey);
}

function updateTime() {
  // set the camera time every x milliseconds to central time, adjusted from the user's timezone
  var time = calcTimeCST();
  timeElement.innerHTML = (formatDigit(time.getHours()) + ":" + formatDigit(time.getMinutes()) + ":" + formatDigit(time.getSeconds()) + ":" + formatDigit(time.getMilliseconds()));
}

function calcTimeCST() {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*+1));
    return nd;
}

// make sure numbers in the camera time are always 2 digits
function formatDigit(number){
  var string = number.toString();
  if(string.length != 1){
    return (string.slice(0, 2));
  } else {
    return ("0" + string);
  }
}

function setCameraImageAndName(key){
  var parentNode = imageElement.parentNode;
  imageElement.remove()

  var newImageElement = new Image()
  newImageElement.setAttribute('id', 'camera-image');
  parentNode.appendChild(newImageElement);

  imageElement = newImageElement;

  imageElement.src = getCameraImage(currentCamKey);
  nameElement.innerHTML = getCameraName(currentCamKey);
}

// assume the camera data name is a .gif file and is in the assets folder
function getCameraImage(key) {
  return ("/static/Poppy Playtime_files/" + cameraData[key]["imgsrc"] + ".gif");
}

// this should work with any text put in the json file
function getCameraName(key) {
  return ("< " + cameraData[key]["name"] + " >");
}


}
/*
     FILE ARCHIVED ON 02:08:46 Feb 08, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:18:50 Feb 14, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.525
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.015
  esindex: 0.011
  cdx.remote: 9.315
  LoadShardBlock: 301.57 (3)
  PetaboxLoader3.datanode: 176.964 (5)
  PetaboxLoader3.resolve: 758.519 (3)
  load_resource: 669.319 (2)
*/