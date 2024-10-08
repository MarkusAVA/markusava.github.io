// Make sure to include jQuery in your HTML
$(document).ready(function() {
    $('#header-placeholder').load('header.html', function() {
        // Attach event listener after content is loaded
        $('.menu-toggle').on('click', toggleMenu);
    });
});
