# Infowave-News
Responsive React.js news app using NewsAPI with category filtering, reusable components, loader for API requests, and mobile-friendly navbar. Built with React hooks and Axios.

Infowave News App is a **React-based news application** that fetches the latest news from [NewsAPI](https://newsapi.org/) and displays them based on different categories. It includes a responsive navbar, category-based news filtering, and a footer with the Infowave logo.

---

## **Features**

- Display latest news headlines.
- Filter news by categories:
  - General
  - Business
  - Technology
  - Sports
  - Entertainment
  - Health
  - Science
- Responsive design with a **hamburger menu** for mobile devices.
- Loader while fetching news.
- Footer with Infowave logo and copyright info.
- Clickable news cards that redirect to the full article.

---

## **Project Structure**
infowave/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── assets/
│ │ └── logo.png
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── NewsCard.js
│ │ ├── Loader.js
│ │ └── Footer.js
│ ├── pages/
│ │ └── Home.js
│ ├── App.js
│ ├── App.css
│ ├── config.js
│ └── index.js
├── package.json
└── package-lock.json


## **Installation**

 Clone the repository:

```bash
git clone <repository-url>
cd infowave
Install dependencies:

bash

npm install
Make sure react-scripts is installed correctly (Windows users may need to reinstall):

bash
npm install react-scripts@5.0.1 --save
Start the development server:

bash
npm start
The app will run at http://localhost:3000.


Configuration

The API key and base URL are configured in src/config.js:

export const NEWS_API_KEY = "103a25ae536d4e94bd5357ab64a95f86";
export const BASE_URL = "https://newsapi.org/v2";



Author,
Sohel Shaikh
Email: ashaikh20753@gmail.com
