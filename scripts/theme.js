document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleHamburgerBtn = document.getElementById('theme-toggle-hamburger-btn');
    const socialsContainer = document.getElementById('socials-container');

    function toggleDarkTheme() {
        const darkStyle = document.getElementById('dark-style');
        const isDarkThemeEnabled = darkStyle.disabled;

        if (isDarkThemeEnabled) {
            darkStyle.disabled = false;
            updateSocialsIcons('github-dark.png', 'telegram-dark.png');
            updateThemeToggleIcons('theme-dark.png');
        } else {
            darkStyle.disabled = true;
            updateSocialsIcons('github.png', 'telegram.png');
            updateThemeToggleIcons('theme-light.png');
        }
    }

    function updateSocialsIcons(githubIcon, telegramIcon) {
        const githubIconElement = socialsContainer.querySelector('[alt="My Github profile"]');
        const telegramIconElement = socialsContainer.querySelector('[alt="My Telegram profile"]');

        if (githubIconElement) {
            githubIconElement.src = `./assets/${githubIcon}`;
        }

        if (telegramIconElement) {
            telegramIconElement.src = `./assets/${telegramIcon}`;
        }
    }

    function updateThemeToggleIcons(themeIcon) {
        const themeIconImg = `<img src="./assets/${themeIcon}" alt="Toggle Light Theme">`;
        themeToggleBtn.innerHTML = themeIconImg;
        themeToggleHamburgerBtn.innerHTML = themeIconImg;
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleDarkTheme);
    }

    if (themeToggleHamburgerBtn) {
        themeToggleHamburgerBtn.addEventListener('click', toggleDarkTheme);
    }
});