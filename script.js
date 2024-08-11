// JavaScript to handle Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Toggle Light Mode';
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
    }
});
