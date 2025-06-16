const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', () => {
    sidebar.style.right = '0'; // Slide in
});

closeBtn.addEventListener('click', () => {
    sidebar.style.right = '-330px'; // Slide out
});
