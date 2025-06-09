    const button = document.querySelector('.dark');
button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', () => {
    sidebar.style.left = '0'; // Slide in
});

closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-330px'; // Slide out
});
