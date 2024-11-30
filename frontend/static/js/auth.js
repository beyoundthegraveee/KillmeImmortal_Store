export function isUserAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

export function updateAuthUI() {
    const loginLink = document.querySelector('#loginLink');
    const registerLink = document.querySelector('#registerLink');

    if (isUserAuthenticated()) {
        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (registerLink) registerLink.style.display = 'block';
    }
}

export function setAuthStatus(isAuthenticated) {
    localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
}