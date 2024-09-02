function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the "header.html" file
    xhr.open('GET', 'header.html', true);

    // Set up the onload callback function
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // If the request is successful, insert the content into the placeholder
        document.getElementById('header-placeholder').innerHTML = xhr.responseText;
      } else {
        console.error('Error loading the header: ', xhr.status, xhr.statusText);
      }
    };

    // Set up the onerror callback function
    xhr.onerror = function () {
      console.error('Network error while loading the header.');
    };

    // Send the request
    xhr.send();