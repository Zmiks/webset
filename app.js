
/**
 * @description This is main app instance.
 * test comment...
 */


/**
 * @description 
 * I am in global space i am global object!
 * This object is nested type.
 */
var App = {
  name: "Web Set web app",
  version: '1.0.0',
  getVersion: function() {
    return this.version
  },
  getAllInfoData: function() {
    return 'App name is: ' + this.name + " , version is: " + this.version;
  }
};

asyncLoad("src/myComponents/gallery.js")
