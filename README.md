# SeeMe Project

## Overview

SeeMe is a web application that provides seamless communication and connection between users. The application allows users to sign up, log in, and connect with friends through video calls and chat. This document provides a detailed overview of the project flow, including the code implementation for key components.

### Project Structure

The project is structured as follows:
│
├── components/
│   ├── design.jsx
│   ├── Loader.jsx
│   ├── GoogleSign.jsx
│   └── Settings.jsx
│
├── pages/
│   ├── transaction.jsx
│   ├── call.jsx
│   ├── auth.jsx
│   ├── profile.jsx
│   ├── forgetpassword.jsx
│   └── _app.js
│
├── src/
│   ├── features/
│   │   └── auth/
│   │       ├── authSlice.js
│   │       └── userApiSlice.js
│
├── styles/
│   ├── auth.module.css
│   ├── call.module.css
│   ├── profile.module.css
│   └── other style files
│
├── .env
├── .gitignore
├── next.config.js
├── package.json
└── README.md

- Key Components
Authentication (auth.jsx)
The auth.jsx file handles user authentication, including sign-up, log-in, and Google OAuth. The component uses Redux for state management and React Toastify for notifications.

- Key Functions:
handleRegisterButton: Handles user registration.
handleLoginButton: Handles user login.
handleGoogleSignUp: Redirects to Google OAuth.

### Call (call.jsx)

The call.jsx file manages the video call functionality and allows users to search for friends, add friends, and handle friend requests. It also includes a settings component for user settings.

- Key Functions:

handleAddFriend: Navigates to the add friends page.
handleFriendRqt: Navigates to the update friends page.

### Profile Setup (profile.jsx)

The profile.jsx file handles user profile setup, including updating the username and profile picture. It uses the react-image-file-resizer library to resize images and Redux for state management.

- Key Functions:

handleImageChange: Resizes and sets the profile picture.
handleSave: Updates the user profile.
Usage
Installation
Clone the repository `git clone https://github.com/yourusername/SeeMe.git`

cd SeeMe

Install the dependencies:

npm install

Create a .env file and add your environment variables:

`NEXT_PUBLIC_API_URL=<your-api-url>`
Run the development server:
npm run dev
Build the project for production:
npm run build
npm run start
Running the Project

- Sign Up: Navigate to the sign-up page, fill in the required fields, and create an account.
- Log In: Navigate to the login page, enter your credentials, and log in to your account.
- Profile Setup: After logging in, set up your profile by uploading a profile picture and updating your username.
- Make Calls: Use the call page to search for friends, add friends, and make video calls.
Notes
Ensure that our API endpoints and authentication configurations are correctly set in the .env file.
For Google OAuth, configure your Google Developer Console and update the necessary endpoints in the backend.

### Conclusion

This README file provides a comprehensive overview of the SeeMe project, including its structure, key components, and usage instructions. Follow the steps outlined to set up and run the project, and refer to the code for detailed implementation of the authentication, call, and profile setup functionalities.
