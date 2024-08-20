function setDarkMode() {
    document.body.classList.add('dark-mode');
}

function setLightMode() {
    document.body.classList.remove('dark-mode');
}

function showContent() {
    var content = document.getElementById('content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}