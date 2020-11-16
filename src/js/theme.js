const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const checkBoxEl = document.querySelector('#theme-switch-toggle');
const STORAGE_SWITCH = 'lightTheme';
const savedTheme = localStorage.getItem(STORAGE_SWITCH);

bodyEl.classList.add(theme.LIGHT);
checkBoxEl.addEventListener('change', onCheckBoxChange);

if (savedTheme === '') {
  bodyEl.classList.add(theme.LIGHT);
}

if (savedTheme === 'false') {
  bodyEl.classList.remove(theme.LIGHT);
  bodyEl.classList.add(theme.DARK);
  checkBoxEl.checked = true;
}

function onCheckBoxChange(evt) {
  bodyEl.classList.toggle(theme.LIGHT);
  bodyEl.classList.toggle(theme.DARK);

  const isLight = bodyEl.classList.contains(theme.LIGHT);
  localStorage.setItem(STORAGE_SWITCH, isLight);
}
