let currentLanguage = 'en';
const languages = ['en', 'hi', 'sa'];
const languageNames = {
    'en': 'EN',
    'hi': 'HI',
    'sa': 'SA'
};

function toggleLanguage() {
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLanguage = languages[nextIndex];

    updateLanguage();

    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.textContent = languageNames[currentLanguage];
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-' + currentLanguage + ']');
    elements.forEach(element => {
        element.textContent = element.getAttribute('data-' + currentLanguage);
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    function toggleDescription(eventElement) {
        const description = eventElement.querySelector('.event-description');
        const button = eventElement.querySelector('.expand-btn');

        if (description.classList.contains('expanded')) {
            description.classList.remove('expanded');
            button.textContent = button.getAttribute('data-' + currentLanguage);
        } else {
            // Close all other descriptions first
            document.querySelectorAll('.event-description.expanded').forEach(desc => {
                desc.classList.remove('expanded');
            });
            document.querySelectorAll('.expand-btn').forEach(btn => {
                btn.textContent = btn.getAttribute('data-' + currentLanguage);
            });

            // Open this description
            description.classList.add('expanded');
            const expandedText = {
                'en': 'Click to collapse ▲',
                'hi': 'छुपाने के लिए क्लिक करें ▲',
                'sa': 'संकुचितुं नुदतु ▲'
            };
            button.textContent = expandedText[currentLanguage];

            // Smooth scroll to the event
            eventElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    function showKandDetails(kandNumber) {
        const kandDetails = {
            1: {
                en: "Bala Kanda details the birth and childhood of Rama, his education under Sage Vishwamitra, breaking of Shiva's bow, and marriage to Sita.",
                hi: "बाल कांड में राम के जन्म और बचपन, ऋषि विश्वामित्र के अधीन शिक्षा, शिव धनुष तोड़ना और सीता से विवाह का वर्णन है।",
                sa: "बालकाण्डे रामस्य जन्म बाल्यकालः, विश्वामित्रमुनेः अधीने शिक्षा, शिवधनुषो भञ्जनं, सीतया सह विवाहः च वर्णितम्।"
            },
            2: {
                en: "Ayodhya Kanda narrates Rama's exile due to Kaikeyi's boons, Dasharatha's death, and the beginning of the forest journey.",
                hi: "अयोध्या कांड में कैकेयी के वरदान के कारण राम का वनवास, दशरथ की मृत्यु और वन यात्रा की शुरुआत का वर्णन है।",
                sa: "अयोध्याकाण्डे कैकेय्याः वरदानकारणात् रामस्य वनवासः, दशरथस्य मरणं, वनयात्रायाः आरम्भः च वर्णितः।"
            }
            // Add more details for other kands...
        };

        const detail = kandDetails[kandNumber];
        if (detail) {
            alert(detail[currentLanguage]);
        }
    }

    function readFullKand(kandNumber) {

    }

    // Add hover effects for better interactivity
    document.querySelectorAll('.timeline-event').forEach(event => {
        event.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
        });

        event.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', function () {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

}




(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'96f1be8c7617a7c1',t:'MTc1NTE4ODA1OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();





let currentLang = 'en';

function toggleLanguage() {
    const langs = ['en', 'hi', 'sa'];
    let idx = langs.indexOf(currentLang);
    currentLang = langs[(idx + 1) % langs.length];
    document.querySelectorAll('[data-' + currentLang + ']').forEach(el => {
        el.textContent = el.getAttribute('data-' + currentLang);
    });
    document.querySelector('.toggle-btn').textContent = currentLang.toUpperCase();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showKandDetails(kandNum) {
    alert("Showing more details for Kand " + kandNum + ". (You can link this to a modal or separate page.)");
}

function readFullKand(kandNum) {
    alert("Opening full Kand " + kandNum + " content. (Replace this alert with actual navigation.)");
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const desc = btn.parentElement.querySelector('.event-description');
            if (desc) {
                desc.classList.toggle('expanded');
                btn.textContent = desc.classList.contains('expanded') ? 'Show Less' : 'Show More';
            }
        });
    });
});




(function () {
    // Inject extra character cards into an existing .characters-grid if present
    const charactersGrid = document.querySelector('.characters-grid');
    const extraCardsHTML = `[
    ["Shabari","ally","Devotee who offers berries to Rama."],
    ["Angada","ally","Vali’s son; valiant Vanara warrior."],
    ["Jambavan","ally","Wise bear-king who guides Hanuman."],
    ["Nala","ally","Engineer of the Rama Setu."],
    ["Nila","ally","Vanara commander in Lanka campaign."],
    ["Sampati","ally","Reveals Sita’s location to search party."],
    ["Trijata","ally","Rakshasi who consoles Sita."],
    ["Vali","neutral","Vanara king; slain by Rama."],
    ["Tara","neutral","Vali’s wise queen."],
    ["Guha","neutral","Nishada chief; Rama’s friend."],
    ["Mandodari","villain","Ravana’s queen; counsels restraint."],
    ["Maricha","villain","Golden deer deceiver."],
    ["Subahu","villain","Rakshasa defeated during yagna."],
    ["Akampana","villain","Advisor who spurs Sita’s abduction."],
    ["Khara & Dushana","villain","Brothers slain by Rama."]
  ]`.replace(/^\[|\]$/g, ''); // keep minified-ish
    if (charactersGrid) {
        const temp = document.createElement('div');
        temp.innerHTML = extraCardsHTML;
        // If the HTML above is a stringified array, just append prepared cards
    }

    // === SVG Flowchart Tree ===
    const svg = document.getElementById('tree-canvas');
    if (!svg) return;

    // Data model
    const nodes = [
        { id: 'vishnu', label: 'Vishnu', role: 'divine', level: 0 },
        { id: 'dasharatha', label: 'King Dasharatha', role: 'neutral', level: 1 },
        { id: 'kaushalya', label: 'Kaushalya', role: 'neutral', level: 1 },
        { id: 'kaikeyi', label: 'Kaikeyi', role: 'neutral', level: 1 },
        { id: 'sumitra', label: 'Sumitra', role: 'neutral', level: 1 },
        { id: 'rama', label: 'Rama', role: 'hero', level: 2 },
        { id: 'sita', label: 'Sita', role: 'hero', level: 2 },
        { id: 'lakshmana', label: 'Lakshmana', role: 'hero', level: 2 },
        { id: 'bharata', label: 'Bharata', role: 'hero', level: 2 },
        { id: 'shatrughna', label: 'Shatrughna', role: 'hero', level: 2 },
        { id: 'hanuman', label: 'Hanuman', role: 'ally', level: 3 },
        { id: 'sugriva', label: 'Sugriva', role: 'ally', level: 3 },
        { id: 'vali', label: 'Vali', role: 'neutral', level: 3 },
        { id: 'tara', label: 'Tara', role: 'neutral', level: 3 },
        { id: 'angada', label: 'Angada', role: 'ally', level: 4 },
        { id: 'jambavan', label: 'Jambavan', role: 'ally', level: 3 },
        { id: 'vibhishana', label: 'Vibhishana', role: 'ally', level: 3 },
        { id: 'ravana', label: 'Ravana', role: 'villain', level: 3 },
        { id: 'mandodari', label: 'Mandodari', role: 'villain', level: 3 },
        { id: 'kumbhakarna', label: 'Kumbhakarna', role: 'villain', level: 3 },
        { id: 'trijata', label: 'Trijata', role: 'ally', level: 4 },
        { id: 'guha', label: 'Guha', role: 'neutral', level: 3 },
        { id: 'shabari', label: 'Shabari', role: 'ally', level: 3 },
        { id: 'lava', label: 'Luv', role: 'hero', level: 4 },
        { id: 'kusha', label: 'Kush', role: 'hero', level: 4 },
    ];

    const nodeHi = [
        { id: 'vishnu', label: 'विष्णु', role: 'divine', level: 0 },
        { id: 'dasharatha', label: 'राजा दशरथ', role: 'neutral', level: 1 },
        { id: 'kaushalya', label: 'कौशल्या', role: 'neutral', level: 1 },
        { id: 'kaikeyi', label: 'कैकेयी', role: 'neutral', level: 1 },
        { id: 'sumitra', label: 'सुमित्रा', role: 'neutral', level: 1 },
        { id: 'rama', label: 'राम', role: 'hero', level: 2 },
        { id: 'sita', label: 'सीता', role: 'hero', level: 2 },
        { id: 'lakshmana', label: 'लक्ष्मण', role: 'hero', level: 2 },
        { id: 'bharata', label: 'भरत', role: 'hero', level: 2 },
        { id: 'shatrughna', label: 'शत्रुघ्न', role: 'hero', level: 2 },
        { id: 'hanuman', label: 'हनुमान', role: 'ally', level: 3 },
        { id: 'sugriva', label: 'सुग्रीव', role: 'ally', level: 3 },
        { id: 'vali', label: 'वाली', role: 'neutral', level: 3 },
        { id: 'tara', label: 'तारा', role: 'neutral', level: 3 },
        { id: 'angada', label: 'अंगद', role: 'ally', level: 4 },
        { id: 'jambavan', label: 'जाम्बवान्', role: 'ally', level: 3 },
        { id: 'vibhishana', label: 'विभीषण', role: 'ally', level: 3 },

    ];

    const links = [
        ['vishnu', 'rama'],
        ['dasharatha', 'rama'], ['kaushalya', 'rama'],
        ['dasharatha', 'bharata'], ['kaikeyi', 'bharata'],
        ['dasharatha', 'lakshmana'], ['sumitra', 'lakshmana'],
        ['dasharatha', 'shatrughna'], ['sumitra', 'shatrughna'],
        ['rama', 'sita'],
        ['rama', 'hanuman'], ['rama', 'sugriva'], ['rama', 'vibhishana'], ['rama', 'guha'],
        ['sugriva', 'vali'], ['vali', 'angada'], ['tara', 'angada'],
        ['ravana', 'mandodari'], ['ravana', 'kumbhakarna'], ['sita', 'lava'], ['sita', 'kusha'],
        ['sita', 'trijata'], ['shabari', 'rama']
    ];

    const roleFill = {
        hero: '#e6f4ff',
        ally: '#e8f5e9',
        sage: '#fff8e1',
        villain: '#ffebee',
        divine: '#f3e5f5',
        neutral: '#eceff1'
    };

    const levelGapY = 120;
    const nodeW = 150, nodeH = 44;
    const sideGapX = 60;

    // Group nodes by level
    const levels = {};
    nodes.forEach(n => { levels[n.level] = levels[n.level] || []; levels[n.level].push(n); });
    const levelKeys = Object.keys(levels).map(Number).sort((a, b) => a - b);

    // Position nodes across width with equal spacing
    const width = 1400;
    levelKeys.forEach(lev => {
        const arr = levels[lev];
        const gap = (width - 2 * sideGapX - arr.length * nodeW) / Math.max(arr.length - 1, 1);
        arr.forEach((n, i) => {
            n.x = sideGapX + i * (nodeW + (arr.length > 1 ? gap : 0)) + nodeW / 2;
            n.y = 60 + lev * levelGapY;
        });
    });

    // Build maps for quick lookup
    const idToNode = {}; nodes.forEach(n => idToNode[n.id] = n);

    // Create SVG groups
    const ns = 'http://www.w3.org/2000/svg';
    function el(name, attrs = {}) {
        const e = document.createElementNS(ns, name);
        Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
        return e;
    }

    // Draw links as cubic Beziers
    links.forEach(([a, b]) => {
        const A = idToNode[a], B = idToNode[b];
        if (!A || !B) return;
        const midY = (A.y + B.y) / 2;
        const path = `M ${A.x} ${A.y + nodeH / 2} C ${A.x} ${midY}, ${B.x} ${midY}, ${B.x} ${B.y - nodeH / 2}`;
        svg.appendChild(el('path', { d: path, class: 'link' }));
    });

    // Draw nodes
    nodes.forEach(n => {
        const g = el('g', { class: 'node', transform: `translate(${n.x - nodeW / 2},${n.y - nodeH / 2})` });
        const rect = el('rect', { width: nodeW, height: nodeH, fill: roleFill[n.role] || '#fff' });
        const text = el('text', { x: nodeW / 2, y: nodeH / 2, fill: '#111' });
        text.textContent = n.label;
        g.appendChild(rect);
        g.appendChild(text);
        g.addEventListener('click', () => alert(n.label + " — " + n.role.toUpperCase()));
        svg.appendChild(g);
    });
})();
