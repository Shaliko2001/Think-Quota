const newQoute = document.getElementById('new-quote');
const ownQuote = document.getElementById('own-quote');
const categories = document.querySelectorAll('.category input');

const quote = document.getElementById('quote');
const author = document.getElementById('author');

const addQuoteButton = document.getElementById('add-quote');
const addNewQuote = document.getElementById('new-content');
const addNewQuoteAuther = document.getElementById('new-author');

const btn = document.querySelector('.mode-btn');
const img = document.querySelector('.mode-btn img');

const languageSelector = document.getElementById('language');

const apis = [
    'https://api.kanye.rest',
    'https://dummyjson.com/quotes/random'
];



categories.forEach(category => {
    category.addEventListener('change', (e) => {
        if (e.target.checked) {
            categories.forEach(c => {
                if (c !== e.target) {
                    c.checked = false;
                }
            });
        }
    });
});


// GET RANDOM QUOTE FROM API
async function fetchNewQoute() {
    try {
        const randomApi = apis[Math.floor(Math.random() * apis.length)];

        const response = await fetch(randomApi);
        const data = await response.json();

        let content, authorName;

        if (randomApi.includes('kanye')) {
            content = data.quote;
            authorName = "Kanye West";
        } else {
            content = data.quote;
            authorName = data.author;
        }

        displayQuote({ content, author: authorName });

    } catch (error) {
        console.error(error);
        alert('API error ...');
    }
}


// GET USER QUOTE
function fetchOwnQoute() {
    let getOwnQoute = JSON.parse(localStorage.getItem('userQuotes')) || [];

    if (getOwnQoute.length === 0) {
        alert('You do not have any quotes');
        return;
    }

    const random = getOwnQoute[Math.floor(Math.random() * getOwnQoute.length)];
    displayQuote(random);
}


// SHOW QUOTE
function displayQuote(data) {
    quote.textContent = data.content;
    author.textContent = `- ${data.author}`;
}


// SAVE USER PREFERENCES
function savePreferences() {
    const preferences = Array.from(categories)
        .filter(c => c.checked)
        .map(c => c.value);

    localStorage.setItem('quotePreferences', JSON.stringify(preferences));
}


// EVENTS
newQoute.addEventListener('click', () => {
    fetchNewQoute();
    savePreferences();
});

ownQuote.addEventListener('click', fetchOwnQoute);


// ADD NEW QUOTE
addQuoteButton.addEventListener('click', () => {
    if (addNewQuote.value && addNewQuoteAuther.value) {

        let existing = JSON.parse(localStorage.getItem('userQuotes')) || [];

        existing.push({
            content: addNewQuote.value.trim(),
            author: addNewQuoteAuther.value.trim()
        });

        localStorage.setItem('userQuotes', JSON.stringify(existing));

        alert('Quote saved ...');

    } else {
        alert('Fill both fields');
    }
});


// DARK / LIGHT MODE
btn.onclick = () => {
    document.body.classList.toggle('light-mode');

    img.src = document.body.classList.contains('light-mode')
        ? "./images/moon.svg"
        : "./images/sun.svg";
};


// TRANSLATE FUNCTION
async function translateText(text, targetLang) {
    try {
        const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
        );
        const data = await res.json();
        return data.responseData.translatedText;
    } catch {
        return null;
    }
}



languageSelector.addEventListener('change', async (e) => {
    const lang = e.target.value;

    const translated = await translateText(quote.textContent, lang);

    if (translated) {
        quote.textContent = translated;
    } else {
        alert('Translation failed ...');
    }
});