
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    link.style.transition = 'transform 0.2s';
    link.style.transform = 'scale(0.95)';
    setTimeout(() => {
      link.style.transform = 'scale(1)';
    }, 200);
  });
});
