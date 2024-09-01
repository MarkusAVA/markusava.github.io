function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
// JavaScript to load the header
function loadHeader() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
}

// Call the function to load the header when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
});
