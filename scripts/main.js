// This file contains the JavaScript code for the Byzantine Software website.
// It handles interactivity and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const contentSection = document.getElementById('content-section');

    toggleButton.addEventListener('click', () => {
        contentSection.classList.toggle('hidden');
    });
});