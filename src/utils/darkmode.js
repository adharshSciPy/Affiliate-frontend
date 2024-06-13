export const toggleDarkMode = (setIsDark) => {
    setIsDark((prev) => {
        const newTheme = !prev;

        if (newTheme) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }

        return newTheme;
    });
};