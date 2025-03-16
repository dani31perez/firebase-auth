# Firebase Authentication App

This project is a React application that implements authentication using Firebase. Users can register, log in with email/password, Google, or GitHub, reset their password, and log out.

## Features
- User registration and login using Firebase Authentication.
- Login with Google and GitHub.
- Password reset functionality.
- Protected routes (dashboard access only for authenticated users).
- Logout functionality.

## Prerequisites
Make sure you have the following installed:
- Node.js (latest LTS recommended)
- npm or yarn

## Getting Started
### 1. Clone the Repository
```sh
git clone https://github.com/dani31perez/firebase-auth.git
cd your-repository
```

### 2. Install Dependencies
```sh
npm install
# or
yarn install
```

### 4. Run the Application
```sh
npm run dev 
# or
yarn dev
```

## Available Routes
| Route        | Description |
|-------------|-------------|
| `/`         | Shows login page if not authenticated, otherwise redirects to Dashboard |
| `/register` | User registration page |
| `/reset`    | Password reset page |
| `/dashboard`| Protected route, only accessible if authenticated |

## Technologies Used
- React.js
- Firebase Authentication
- React Router
- React Bootstrap

## License
This project is licensed under the MIT License.

