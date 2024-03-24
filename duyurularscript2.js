


function toggleMenu() {
	const menuOverlay = document.getElementById('menuOverlay');
	const isOpen = menuOverlay.style.display === 'block'; // Check if menu is open
  
	if (isOpen) {
	  menuOverlay.style.display = 'none';
	} else {
	  menuOverlay.style.display = 'block';
	  // Make section texts visible
	  const menuSections = document.querySelectorAll('.menu-section');
	  menuSections.forEach(section => {
		section.style.display = 'block';
	  });
	}
  }
  
  document.addEventListener('DOMContentLoaded', function () {
	const menuIcon = document.querySelector('.toggle');
	menuIcon.addEventListener('click', toggleMenu);
  
	const menuSections = document.querySelectorAll('.menu-section');
	menuSections.forEach(section => {
	  section.addEventListener('click', () => {
		toggleMenu(); // Hide the menu after selecting a section
	  });
	});
  
	const arrowDown = document.querySelector('.arrow-down');
	arrowDown.addEventListener('click', function () {
	  window.scrollTo({
		top: document.body.scrollHeight*0.34,
		behavior: 'smooth'
	  });
	});
  });


//   NAV
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });


  function zoomHeaderContent(isHovered) {
    var headerContent = document.querySelector('.header-content');

    if (isHovered) {
      headerContent.style.transform = 'translate(-50%, -50%) scale(1.1)';
      headerContent.style.backgroundSize = '110% auto';
    } else {
      headerContent.style.transform = 'translate(-50%, -50%) scale(1)';
      headerContent.style.backgroundSize = 'cover';
    }
  }
  




  