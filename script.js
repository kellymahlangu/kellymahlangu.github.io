document.getElementById('theme-toggle').addEventListener('click', function() {
    const root = document.documentElement;
    if (root.style.getPropertyValue('--background-color') === root.style.getPropertyValue('--background-color-light')) {
        root.style.setProperty('--background-color', root.style.getPropertyValue('--background-color-dark'));
        root.style.setProperty('--text-color', root.style.getPropertyValue('--text-color-dark'));
        root.style.setProperty('--link-color', root.style.getPropertyValue('--link-color-dark'));
    } else {
        root.style.setProperty('--background-color', root.style.getPropertyValue('--background-color-light'));
        root.style.setProperty('--text-color', root.style.getPropertyValue('--text-color-light'));
        root.style.setProperty('--link-color', root.style.getPropertyValue('--link-color-light'));
    }
});
