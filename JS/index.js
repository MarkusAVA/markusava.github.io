function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            // Optionally, you can also call a function here to initialize any scripts or event listeners needed
            // For example:
            // initializeMenuToggle();
        })
        .catch(error => console.error("There was a problem with the fetch operation:", error));
});


// Call the function to load the header when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
});
