// Track the state of the animation
let animationState = 0;  // 0: start, 1: first half played, 2: frozen after first half, 3: second half played, 4: frozen after second half

function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-icon");

    if (menu) {
        menu.classList.toggle("show");

        if (animationState === 0) {
            // First click: Play the first half of the animation (frames 1-15)
            menuIcon.classList.remove("finish-animation", "frozen", "final-frozen");
            menuIcon.classList.add("halfway-animation");
            animationState = 1;  // Move to the state after the first half
        } 
        else if (animationState === 1) {
            // After the first half: Freeze on frame 15
            menuIcon.classList.remove("halfway-animation");
            menuIcon.classList.add("frozen");  // Apply frozen class to stop on frame 15
            animationState = 2;  // Move to frozen state after first half
        } 
        else if (animationState === 2) {
            // Second click: Play the second half of the animation (frames 16-30)
            menuIcon.classList.remove("frozen");
            menuIcon.classList.add("finish-animation");
            animationState = 3;  // Move to the state after the second half
        } 
        else if (animationState === 3) {
            // After the second half: Freeze on frame 30
            menuIcon.classList.remove("finish-animation");
            menuIcon.classList.add("final-frozen");  // Apply frozen class to stop on frame 30
            animationState = 4;  // Move to frozen state after second half
        } 
        else if (animationState === 4) {
            // Reset: Click while frozen on frame 30, reset to frame 1
            menuIcon.classList.remove("final-frozen");
            menuIcon.style.backgroundPosition = "0 0";  // Reset background to frame 1
            animationState = 0;  // Reset state to initial
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
        <div id="menu-icon" class="halfway-animation"></div> <!-- Initially shows the first half -->
    </div>
    <div class="buttons" id="menu">
        <a href="../index.html" class="button">Home</a>
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
