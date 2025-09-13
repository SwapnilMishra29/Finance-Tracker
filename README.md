#Finance Tracker#

A simple personal finance tracker built with the MERN stack. It allows users to add, edit, and delete transactions, and keeps track of income, expenses, and savings.

Features

Add, edit, and delete transactions.

View transactions in a clean, organized list.

Track income, expenses, and savings.

Responsive design for easy use on desktop and mobile.

Tech Stack

Frontend: React, React Router

Backend: Node.js, Express

Database: MongoDB

Styling: CSS

Installation

Clone the repository

git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker


Backend setup

cd backend
npm install


Create a .env file in the backend folder with your MongoDB connection string:

MONGO_URI=your_mongodb_uri_here


Start the backend:

npm start


Frontend setup

cd ../frontend
npm install
npm start


The frontend will run on http://localhost:3000 by default.

Folder Structure
Finance-Tracker/
  ├── backend/       # Node.js + Express API
  ├── frontend/      # React app
  ├── .gitignore
  └── README.md

Usage

Open the app in your browser.

Click Add Transaction to add a new income or expense.

View your transactions on the home page.

Edit or delete transactions as needed.

License

This project is open source and free to use.
