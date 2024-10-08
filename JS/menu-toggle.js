// Track the state of the animation
let animationState = 0;  // 0: start, 1: first half played

function toggleMenu() {
    var menuIcon = document.getElementById("menu-icon");

    if (animationState === 0) {
        // First click: Play the first half of the animation (frames 1-15)
        menuIcon.classList.remove("finish-animation", "frozen", "final-frozen");
        menuIcon.classList.add("halfway-animation");
        
        // Set a timeout to freeze on frame 15 after the animation completes (1.5s)
        setTimeout(function() {
            menuIcon.classList.remove("halfway-animation");
            menuIcon.classList.add("frozen");  // Freeze on frame 15
        }, 1500);  // Wait for 1.5 seconds (duration of the animation)
        
        animationState = 1;  // Move to the next state
    } 
    else if (animationState === 1) {
        // Second click: Play the second half of the animation (frames 16-30)
        menuIcon.classList.remove("frozen");
        menuIcon.classList.add("finish-animation");

        // Set a timeout to freeze on frame 30 after the second half completes (1.5s)
        setTimeout(function() {
            menuIcon.classList.remove("finish-animation");
            menuIcon.classList.add("final-frozen");  // Freeze on frame 30

            // Reset to initial state after freezing
            setTimeout(function() {
                menuIcon.classList.remove("final-frozen");
                menuIcon.style.backgroundPosition = "0 0";  // Reset to frame 1
                animationState = 0;  // Reset animation state
            }, 1500);  // After another 1.5 seconds (final freeze duration)
        }, 1500);  // Wait for the second half to finish (1.5 seconds)
    }
}

// Attach the click event listener to the menu toggle
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
