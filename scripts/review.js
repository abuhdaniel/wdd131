// Get current count or set to 0
let count = localStorage.getItem("reviewCount");

if (!count) {
    count = 0;
}

// Increase count
count++;

// Save back to localStorage
localStorage.setItem("reviewCount", count);

// Display on page
document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector("#counter");
    if (counter) {
        counter.textContent = count;
    }
});