
/**
 * @description Loadinf async js script files.
 * @param {*} path 
 * @param {*} callback 
 */
function asyncLoad(path, callback) {

  if (typeof callback === "undefined") {
    callback = function () { };
  }

  var nuiScript = document.createElement("script")
  nuiScript.src = path
  document.head.appendChild(nuiScript)
  nuiScript.onload = function () {
    callback()
  }

}

function openFullscreen(nameOfCurrentElement) {

  try {
      
    var elem = document.getElementById(nameOfCurrentElement);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
  } catch (err) {
    console.log("Something wrong with openFullscreen. Value of arg nameOfCurrentElement is :" + nameOfCurrentElement)
  }

}