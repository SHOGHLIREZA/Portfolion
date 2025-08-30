// Smooth Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Back to Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 20px';
scrollToTopButton.style.backgroundColor = '#007BFF';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme Toggle (Dark/Light Mode)
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Toggle Theme';
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.bottom = '20px';
themeToggleButton.style.left = '20px';
themeToggleButton.style.padding = '10px 20px';
themeToggleButton.style.backgroundColor = '#28a745';
themeToggleButton.style.color = 'white';
themeToggleButton.style.border = 'none';
themeToggleButton.style.cursor = 'pointer';
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// CSS for dark mode
const style = document.createElement('style');
style.innerHTML = `
  body.dark-theme {
    background-color: #333;
    color: white;
  }
  .hero {
    background-color: #444;
  }
  .contact form button {
    background-color: #28a745;
  }
`;
document.head.appendChild(style);
