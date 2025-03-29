// Immediately restore the user's theme preference when page loads
(function() {
  const storedTheme = localStorage.getItem('quarto-color-scheme');
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
  }
})();