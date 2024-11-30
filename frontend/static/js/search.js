document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.trim();
    if (query) {
        window.location.href = `/search?q=${query}`;
    } else {
        window.location.href = '/search';
    }
});