
function showHideGallery() {
  
  console.log("Function showHideGallery triggered.")

  if (document.getElementById('gal').style.display === 'none') {
    document.getElementById('gal').style.display = 'flex';
  } else {
    document.getElementById('gal').style.display = 'none';
  }

}