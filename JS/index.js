function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
 // JavaScript to load the header
document.getElementById("header-placeholder").innerHTML = fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
});