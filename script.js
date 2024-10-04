function changeImage(imageSrc) {
    document.getElementById("main-image").src = imageSrc;
}

document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});


  // Select all FAQ titles
  const faqTitles = document.querySelectorAll('.faq-title');

  // Add click event listener to each title
  faqTitles.forEach(title => {
      title.addEventListener('click', () => {
          // Toggle the display of the next sibling content
          const content = title.nextElementSibling;
          const icon = title.querySelector('.toggle-icon');

          if (content.classList.contains('show')) {
              content.classList.remove('show');
              icon.textContent = '+';
          } else {
              content.classList.add('show');
              icon.textContent = '-';
          }
      });
  });



//  Menu Navbar 
// Toggle mobile menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', function() {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});
