function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
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