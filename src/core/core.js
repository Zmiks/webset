
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