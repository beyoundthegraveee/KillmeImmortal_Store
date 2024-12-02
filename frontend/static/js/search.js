
const search_input = document.getElementById('search-input');
const search_button = document.querySelector('.search-icon');


search_input.addEventListener('keyup', function(event) { 
    if (event.key === 'Enter') { 
        performSearch(this.value.trim()); 
    } 
}); 
search_button.addEventListener('click', function() { 
    const query = search_input.value.trim(); 
    performSearch(query); 
});

async function performSearch(query) { 
    if (query) { 
        window.location.href = `/search?q=${query}`;
    } else { 
        window.location.href = '/search';
    }
}

