# AlloMedia Front-End

## Project Overview

This is the front-end part of the AlloMedia application, built using React and Vite. The app provides a responsive user interface and integrates with the back-end for handling various user interactions. The project is designed with modern web development practices, featuring routing, state management, and form validation.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Packages Used](#packages-used)
- [How to Use the Project](#how-to-use-the-project)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive UI**: Designed for mobile and desktop screens.
- **Routing**: Client-side routing using `react-router-dom` for seamless navigation.
- **Form Handling**: User inputs handled with validation and error feedback.
- **Loading Indicators**: `react-loading-indicators` for better UX during data fetching.
- **Notifications**: Real-time notifications with `react-hot-toast`.
- **SPA Architecture**: Single Page Application for seamless user experience.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Routing**: react-router-dom
- **HTTP Requests**: Axios
- **Notifications**: react-hot-toast
- **State Management**: React hooks
- **Linting**: ESLint

## Setup and Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v18.x or later)
- **npm** (v10.x or later)

### Installation

1. **Clone the repository:**
   ```bash
    git clone https://github.com/your-username/allomedia-frontend.git
    cd allomedia-frontend
    ```

2. **Install dependencies for the front-end:**
    ```bash
    npm install
    ```

3. **Clone the back-end repository:**

    - You will also need to clone and run the back-end application. Follow these steps:

    ```bash
    git clone https://github.com/Mohamed072005/AlloMedia/tree/develop
    cd AlloMedia
    npm install
    npm start
    ```

4. **Run the front-end development server:**

    -Once the back-end is up and running, open a new terminal and run the front-end:

    ```bash
    npm run dev
    ```

### Environment Variables

The application uses the following environment variables:

- `VITE_API_BASE_URL`: This is the base URL of your backend API. It should point to the URL where your backend service is running. For local development, it might be something like `http:localhost:3000/api`, and for production, it should be the production URL of your backend.

Make sure to create a `.env` file in your project root and include these variables with appropriate values for your environment.

### Packages Used

Here’s a list of the primary packages used in this project and their roles:

- **axios**: A popular JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies API requests and handles promises.
- **install**:  A package that allows for quick installation of Node.js modules directly from the command line.
- **npm**: Node's package manager, responsible for managing dependencies, scripts, and versioning in Node.js projects.
- **react**: A JavaScript library for building user interfaces. It helps in creating interactive UIs with a component-based architecture.
- **react-dom**: This package provides DOM-specific methods that allow React to interact with the browser’s DOM, bridging React components with the actual HTML elements in a web page.
- **react-hot-toast**:  A lightweight package for showing customizable toast notifications in React applications.
- **react-loading-indicators**: A package that provides a collection of loading indicators (spinners, loaders) for React applications to show during data loading.
- **react-router-dom**:  A powerful routing library for React applications, enabling navigation between different views or pages, managing URLs, and more.

### How to Use the Project

Once the project is up and running, follow these steps to use the authentication features:

1. **User Registration**

- Go to the /register route in your browser.
- Provide your details (name, email, username, password, phone number, your address).
- After submitting the registration form, a confirmation email will be sent to your email address.
- Click the link in the email to verify your account.

2. **Login**

- Go to the /login route.
- Enter your email, username, or phone number along with your password to log in.
- After submitting the login form, a OTP code will be send to the your address email, take this code to the form that will display after login and submit the form for verify this device

3. **Password Reset**

- If you forget your password, go to the click on reset password in login form.
- Enter your registered email, and a password reset link will be sent.
- Use the link in the email to reset your password.

### Contributing

We welcome contributions to improve this project! To contribute, follow the steps below:

#### 1. Fork the Repository
- Click the "Fork" button at the top right of this repository page.
- This will create a copy of the repository under your GitHub account.

#### 2. Clone Your Fork
- Clone the forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/AlloMedia-fron-end.git
   ```

#### 3. Create a New Branch
-Create a new branch for your feature or bugfix.

   ```bach
   git checkout -b your-branch-name
   ```

#### 4. Make Changes
- Implement your feature, fix a bug, or make any improvements. Make sure to follow the coding style and best practices used in the project.

#### 5.Commit and Push Your Changes
- Commit your changes with a descriptive message.

   ```bach
   git add .
   git commit -m "Description of changes"
   git push origin your-branch-name
   ```

#### 6. Submit a Pull Request
- Go to the original repository and click the "Pull Request" button.
- Make sure to provide a clear description of your changes in the pull request, referencing any issues or feature requests you're addressing.
