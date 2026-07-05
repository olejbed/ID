// ===============================
// Subtle Parallax Background Effect
// ===============================

const background = document.querySelector(".background");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Track mouse (desktop)
document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Track tilt (iPhone / mobile)
window.addEventListener("deviceorientation", (e) => {
    if (e.gamma && e.beta) {
        mouseX = e.gamma / 45;  // left/right tilt
        mouseY = e.beta / 45;   // up/down tilt
    }
});

// Smooth animation loop
function animate() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    if (background) {
        background.style.transform = `
            translate(${currentX * 15}px, ${currentY * 15}px)
            scale(1.05)
        `;
    }

    requestAnimationFrame(animate);
}

animate();
