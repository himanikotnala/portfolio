
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const skillLevels = document.querySelectorAll('.skill-level');

skillLevels.forEach(skill => {
 const width = skill.classList.contains('html') ? '90%' :
                skill.classList.contains('css') ? '85%' :
                skill.classList.contains('js') ? '75%' :
                skill.classList.contains('excel') ? '70%' :
                skill.classList.contains('sql') ? '75%' :
                skill.classList.contains('python') ? '50%' :
                '0';

  skill.style.width = width;
});

