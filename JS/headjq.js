// Define the toggleMenu function
function toggleMenu() {
    var menu = $('#menu'); // Use jQuery to select the menu
    menu.toggleClass('show'); // Toggle the 'show' class on the menu
}

// Document ready function to ensure the DOM is fully loaded
$(document).ready(function() {
    // Load the header.html content into the header-placeholder
    $('#header-placeholder').load('../HTML/header.html', function(response, status, xhr) {
        if (status == "error") {
            // Handle the error if loading fails
            console.error('Failed to load header:', xhr.status, xhr.statusText);
        } else {
            // After loading the header, add the event listener for the menu toggle
            $('.menu-toggle').on('click', toggleMenu); // Attach the click event listener
        }
    });
});
