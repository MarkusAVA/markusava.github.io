// Define the toggleMenu function
let clickCount = 0;

function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-icon");

    if (menu) {
        menu.classList.toggle("show");

        // Toggle between the two halves of the animation
        if (clickCount === 0) {
            // First click: Play the first half of the GIF
            menuIcon.src = "../Visuals/Gifs/menu1-p1.gif";  // Replace with actual first-half GIF URL
            clickCount = 1;
        } else if (clickCount === 1) {
            // Second click: Play the second half of the GIF
            menuIcon.src = "../Visuals/Gifs/menu1-p2.gif"; // Replace with actual second-half GIF URL
            clickCount = 0;
        }
    }
}

// Hardcoded HTML content
const headerHTML = `
<header class="header">
    <div class="favicon"> 
        <img src="../Visuals/Favicons/MarkusAVA-favicon.png" alt="MarkusAVA">
    </div> 
    <div class="menu-toggle">
        <img src="../Visuals/Gifs/menu1-p1.gif" id="menu-icon" alt="Menu Toggle Icon" style="display: block;">
    </div>
    <div class="buttons" id="menu">
        <a href="index.html" class="button">Main</a>
        <a href="../HTML/aboutme.html" class="button">About me</a>
        <a href="../HTML/comingsoon.html" class="button">Coming soon</a>
        <a href="../HTML/timer.html" class="button">Timer thingy</a>
    </div>
</header>
`;

// Insert the hardcoded header HTML into the placeholder
document.getElementById('header-placeholder').innerHTML = headerHTML;

// Attach the click event listener to the menu toggle
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
