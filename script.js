const emojiGrid = document.getElementById('emoji-grid');
const searchInput = document.getElementById('search');
const categoryButtons = document.querySelectorAll('.category-btn');
let emojis = emojiList;

function renderEmojis(filteredEmojis) {
    emojiGrid.innerHTML = '';
    filteredEmojis.forEach(emoji => {
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji-item';
        emojiDiv.textContent = emoji.emoji;
        emojiGrid.appendChild(emojiDiv);
    });
}

renderEmojis(emojis);

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredEmojis = emojis.filter(emoji => 
        emoji.description.toLowerCase().includes(query) || 
        emoji.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderEmojis(filteredEmojis);
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.getAttribute('data-category').toLowerCase();
        const filteredEmojis = category === 'all' 
            ? emojis 
            : emojis.filter(emoji => emoji.category.toLowerCase().includes(category));
        
        renderEmojis(filteredEmojis);
    });
});
