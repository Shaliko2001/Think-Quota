#  Random Quote Generator

A simple and interactive web application that generates random quotes, allows users to save their own quotes, select categories, translate text, and switch between light/dark modes.

##  Features

-  Random Quotes Generator – Fetch quotes from multiple APIs
-  User Quotes – Add and store your own quotes using LocalStorage
-  Category Selection – Choose preferred quote categories (only one at a time)
-  Light / Dark Mode – Toggle UI theme
-  Translation Feature – Translate quotes into different languages
-  Persistent Storage – Saves user preferences and quotes in LocalStorage

##  How It Works

- Fetches quotes from:
  - https://api.kanye.rest
  - https://dummyjson.com/quotes/random
- Stores user quotes in browser storage
- Uses MyMemory API for translation
- Handles UI updates dynamically with JavaScript

##  Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage API
- Fetch API
- MyMemory Translation API

##  Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/random-quote-generator.git
```

2. Navigate to project folder:

```bash
cd random-quote-generator
```

3. Open the project:

Just open `index.html` in your browser.

##  Project Structure

```
random-quote-generator/
│
├── index.html
├── style.css
├── script.js
├── images/
└── README.md
```

##  Future Improvements

- Add more quote APIs
- Improve category filtering (API-based)
- Favorite quotes system
- Backend integration

##  Author

Built with Shaliko Arshakyan using JavaScript, HTML , CSS