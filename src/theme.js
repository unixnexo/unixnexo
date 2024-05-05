/**
 * theme selection
 */
const themSwitcher = document.getElementById('theme-switcher');
const themSwitcherText = document.getElementById('theme-switcher-text');
const batmanIcon = document.getElementById('batman-icon');
const supermanIcon = document.getElementById('superman-icon');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    themSwitcherText.innerHTML = 'on';
    if (batmanIcon || supermanIcon) {
        batmanIcon.classList.remove('hidden');
        supermanIcon.classList.add('hidden');
    }
} else {
    document.documentElement.classList.remove('dark')
    themSwitcherText.innerHTML = 'off';
    if (batmanIcon || supermanIcon) {
        batmanIcon.classList.add('hidden');
        supermanIcon.classList.remove('hidden');
    }
}

const textSwitcher = () => {
    if (themSwitcherText.innerHTML === 'on') {
        themSwitcherText.innerHTML = 'off';
        if (batmanIcon || supermanIcon) {
            batmanIcon.classList.add('hidden');
            supermanIcon.classList.remove('hidden');
        }
    } else {
        themSwitcherText.innerHTML = 'on';
        if (batmanIcon || supermanIcon) {
            batmanIcon.classList.remove('hidden');
            supermanIcon.classList.add('hidden');
        }
    }
};

const themeSwitcher = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        textSwitcher();
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        textSwitcher();
    }
};

if (themSwitcher) {
    themSwitcher.addEventListener('click', () => {
        themeSwitcher();
    });
}