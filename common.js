let currentLanguage = 'en';

function toggleLanguage() {
    const root = document.documentElement;
    currentLanguage = (currentLanguage === 'en') ? 'hi' : (currentLanguage === 'hi') ? 'sa' : 'en';

    root.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            if (element.tagName === 'TITLE') {
                element.textContent = text;
            } else {
                element.innerHTML = text;
            }
        }
    });

    const toggleBtn = document.querySelector('.toggle-btn');
    if (toggleBtn) {
        toggleBtn.textContent = currentLanguage.toUpperCase();
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openChapter(chapterData) {
    const contentBox = document.getElementById('chapterContent');
    const titleElement = document.getElementById('contentTitle');
    const textElement = document.getElementById('contentText');

    titleElement.innerHTML = chapterData.title[currentLanguage];
    textElement.innerHTML = chapterData.content[currentLanguage];

    contentBox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeChapter() {
    document.getElementById('chapterContent').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function generateChapters() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    if (chaptersGrid) {
        chaptersGrid.innerHTML = '';
        chapters.forEach(chapter => {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.onclick = () => openChapter(chapter);
            card.innerHTML = `
                <div class="chapter-number">${chapter.number}</div>
                <h3 class="chapter-title">${chapter.title[currentLanguage]}</h3>
                <p class="chapter-summary">${chapter.summary[currentLanguage]}</p>
                <button class="read-btn">Read Chapter</button>
            `;
            chaptersGrid.appendChild(card);
        });
    }
}

function updateContent() {
    toggleLanguage();
    toggleLanguage();
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeChapter();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    generateChapters();
    updateContent();
});