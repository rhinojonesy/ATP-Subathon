// script.js

// Example functionality to handle button clicks
document.querySelectorAll('.action').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} clicked!`);
    });
});
