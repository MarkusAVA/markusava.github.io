// Define the toggleMenu function
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu) {
      menu.classList.toggle("show");  // Toggle the 'show' class on the menu
  }
}

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Open the GET request to fetch header.html
xhr.open('GET', '../HTML/header.html', true);

// When the request is loaded
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
      // Insert the header.html content into the placeholder
      document.getElementById('header-placeholder').innerHTML = xhr.responseText;

      // After loading the header, add the event listener for the menu toggle
      var menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle) {
          menuToggle.addEventListener('click', toggleMenu);  // Attach the click event listener to the menu toggle button
      }
  } else {
      console.error('Failed to load header:', xhr.status, xhr.statusText);
  }
};

// Handle network errors
xhr.onerror = function () {
  console.error('Network error while loading header.');
};

// Send the request
xhr.send();
