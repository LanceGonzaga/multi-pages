# React Multi-Page App

This is a structured React app built with React Router, reusable components via props, and lifted state for shared form data. It demonstrates core React concepts such as routing, props, and state management across multiple pages.

---

## Summary

- **Client-side routing** using `react-router-dom` for multiple pages: Home, About, Services, and Contact.
- **Component reuse** through a dynamic `ServiceCard` component.
- **State lifting** to manage and display form data in the Contact page using `ContactForm` and `FormSummary`.

---

## Features

- Multi-page routing without page reload
- Prop-driven service cards
- Real-time form state sharing
- Modular file structure

---

## Project Structure

src/
├── components/
│ ├── ContactForm.jsx
│ ├── FormSummary.jsx
│ └── ServiceCard.jsx
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Services.jsx
│ └── Contact.jsx
├── App.jsx
└── main.jsx

---

## Routes Overview

| Route       | Component | Description              |
|-------------|-----------|--------------------------|
| `/`         | Home      | Welcome/landing page     |
| `/about`    | About     | App description          |
| `/services` | Services  | Lists service offerings  |
| `/contact`  | Contact   | Feedback form & summary  |

## Install Dependencies
use npm install

## run a localhost
npm run dev   # For Vite
# or
npm start     # For Create React App
