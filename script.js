// Select the navigation links
const navLinks = document.querySelectorAll('.navigation li a');

// Add an event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Function to scroll to the corresponding section when a navigation link is clicked
function scrollToSection(event) {
  event.preventDefault(); // Prevent the default link behavior
  const targetId = this.getAttribute('href'); // Get the ID of the target section
  const targetSection = document.querySelector(targetId); // Select the target section
  targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
}
