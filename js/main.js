const themeBtn = document.querySelectorAll('[data-theme-toggler]');

themeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (document.documentElement.dataset.theme === 'light') {
      document.documentElement.dataset.theme = 'dark';

      // add to local storage
      localStorage.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
      // add to local storage
      localStorage.theme = 'light';
    }
  });
});
