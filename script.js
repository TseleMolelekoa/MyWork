// Get references to the button and the aboutContent div
const showButton = document.getElementById('about');
const aboutContent = document.getElementById('aboutContent');

// Add a click event listener to the button
showButton.addEventListener('click', () => {
  // Toggle the 'hidden' class to show/hide the content
  aboutContent.classList.toggle('about_hidden');
});
