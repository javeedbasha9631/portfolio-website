// Get the toggle switch and icons
const toggleSwitch = document.getElementById('dark-mode-toggle');
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = toggleSwitch.checked;
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

  // Update icons based on theme
  if (isDarkMode) {
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
  } else {
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
  }
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', toggleDarkMode);

// Check local storage for theme preference
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    toggleSwitch.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
  } else {
    toggleSwitch.checked = false;
    document.documentElement.setAttribute('data-theme', 'light');
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
  }
}

// Save theme preference to local storage
function saveTheme() {
  const isDarkMode = toggleSwitch.checked;
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Load theme on page load
loadTheme();

// Save theme on toggle
toggleSwitch.addEventListener('change', () => {
  toggleDarkMode();
  saveTheme();
});

// Typing Animation
const typingText = "Welcome to My Portfolio";
const typingElement = document.querySelector('.typing');
let charIndex = 0;

function type() {
  if (charIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  }
}

type();