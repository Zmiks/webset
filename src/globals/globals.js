
// Global Static data

var ApplicationOptions = {
  title: 'MY WEB APPLICATION'
  asyncLoad("src/globals/globals.js", function() {
    console.log("globals script loaded.") 
  })
};
