# ✍️ Text Analyzer & Word Counter 📊

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PNPM](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

A lightning-fast, user-friendly web application built with React and Vite that allows you to analyze text, count words, characters, and sentences, and get instant insights into your writing. Perfect for content creators, students, and anyone needing quick text metrics.

---

## 📖 Table of Contents

* [✨ Features](#-features)
* [🖼️ GIF Demo](#️-gif-demo)
* [🚀 live preview](#-live-preview)
* [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
* [⚙️ Installation](#%EF%B8%8F-installation)
* [▶️ Usage](#%EF%B8%8F-usage)
* [📂 Project Structure](#-project-structure)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)
* [📧 Contact](#-contact)

---

## ✨ Features

* **📝 Real-time Text Input**: Instantly see changes as you type.
* **🔢 Word & Character Count**: Get accurate counts for words and characters.
* **📈 Readability Statistics**: (Potentially, based on `Stats.jsx`) Provides insights like average word length, sentence count.
* **⚠️ Content Warnings**: (Based on `Warning.jsx`) Highlights potential issues or areas for improvement in the text.
* **🎨 Clean & Intuitive UI**: A minimalist design for a seamless user experience.
* **⚡ Blazing Fast Performance**: Powered by Vite for rapid development and optimized production builds.

---

## 🖼️ GIF Demo

Check out a quick demonstration of the application in action:

![Screen Recording](src/assets/screen-recording.gif)

---

## 🚀 Live Preview
* You can also try the live version: ---> [Here](https://word-analytics-six-nu.vercel.app/)
---

## 🛠️ Technologies Used

* **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/)**: A next-generation frontend tooling that provides an extremely fast development environment and optimized builds.
* **[pnpm](https://pnpm.io/)**: A fast, disk-space efficient package manager.
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: The core programming language.
* **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: For styling the application.
* **[ESLint](https://eslint.org/)**: For maintaining code quality and consistency.

---

## ⚙️ Installation

* To get a local copy of this project up and running on your machine, follow these simple steps.

### Prerequisites

* Make sure you have [Node.js](https://nodejs.org/) installed (which includes npm), and it's recommended to install pnpm globally for this project:

    ```bash
    npm install -g pnpm
    ```
### Steps
1. Clone the repository:

    ```bash
    git clone https://github.com/aminetiouk/word-analytics
    cd word-analytics
    ```
2. Install dependencies using pnpm:
    ```bash
    pnpm install
    ```
## ▶️ Usage

* Once the installation is complete, you can run the project in development mode or build it for production.

### - Development Mode
To start the development server with hot-reloading:
```bash
pnpm dev
```
### - Production Build
* To build the optimized static assets for production, which will generate a dist folder:

```bash

pnpm build
```
## 📂 Project Structure
```bash
.
├── LICENSE                    # Project license file
├── README.md                  # This README file
├── index.html                 # Main HTML entry point
├── src/                       # All source code for the application
│   ├── assets/                # Static assets like images and GIFs
│   │   ├── counter.svg
│   │   └── screen-recording.gif # Project demo GIF
│   ├── components/             # Reusable React components
│   │   ├── App.jsx
│   │   ├── Background.jsx
│   │   ├── Footer.jsx
│   │   ├── H1.jsx
│   │   ├── H2.jsx
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── Stats.jsx       # handles text statistics
│   │   ├── Textarea.jsx    # The main text input area
│   │   └── Warning.jsx     # Displays warnings or insights
│   ├── index.css           # Global CSS styles
│   ├── lib/                # Utility functions or constants
│   │   └── constants.js
│   └── main.jsx            # Main React application entry point
└── vite.config.js          # Vite configuration file for bundling
```

## 🤝 Contributing
* Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

* If you have a suggestion that would make this project better, please fork the repo and create a pull request. Don't forget to give the project a star! ⭐

1. Fork the Project
2. Create your Feature Branch: 
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. Commit your Changes: 
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4. Push to the Branch:
    ```bash
    git push origin feature/AmazingFeature
    ```
5. Open a Pull Request

## 📄 License
* Distributed under the MIT License. See the [LICENSE](/LICENSE) file for more information.

## 📧 Contact
* Name - [@aminetiouk](tiouk.amine@gmail.com)
* Project Link: [@word-analytics](https://github.com/aminetiouk/word-analytics)