// Hardcoded HTML content
const headerHTML = `
<header class="header">
    <div class="favicon"> 
        <img src="../Visuals/Favicons/MarkusAVA-favicon.png" alt="MarkusAVA">
    </div> 
    <div class="menu-toggle">
        <div id="menu-icon" class=""></div> <!-- Initially no class, animation starts after click -->
    </div>
    <div class="buttons" id="menu">
        <a href="../index.html" class="button">Home</a>
        <a href="../HTML/aboutme.html" class="button">About me</a>
        <a href="../HTML/comingsoon.html" class="button">Coming soon</a>
        <a href="../HTML/timer.html" class="button">Timer thingy</a>
    </div>
</header>

<!-- External JavaScript file link -->
<script src="../JS/menu-toggle.js"></script>

`;

// Insert the hardcoded header HTML into the placeholder
document.getElementById('header-placeholder').innerHTML = headerHTML;

