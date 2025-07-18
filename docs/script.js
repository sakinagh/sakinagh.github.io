// JavaScript function to toggle the navigation menu on small screens
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show"; // Add 'w3-show' class to display the menu
  } else {
    x.className = x.className.replace(" w3-show", ""); // Remove 'w3-show' class to hide the menu
  }
}
  
//})(jQuery);