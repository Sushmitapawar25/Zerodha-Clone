# Zerodha Clone – Full Stack Web Application

A full-stack Zerodha-inspired web application developed as a major project.

The project demonstrates a modern trading platform interface with separate **Frontend, Dashboard, and Backend** applications.

---

## 📌 Project Overview

This project is a clone/inspired version of the Zerodha trading platform.

It is developed using:

* React.js for the frontend and dashboard
* Node.js and Express.js for the backend
* MongoDB for database management
* Mongoose for MongoDB object modeling
* Axios for API communication
* React Router for navigation
* Chart.js for displaying charts and market-related data
* Material UI for dashboard components

The application is divided into three main parts:

* **Frontend** – Landing page and user-facing website
* **Dashboard** – Trading dashboard interface
* **Backend** – REST API and database operations

---

## 🏗️ Project Structure

```text
Zerodha-Clone/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── dashboard/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## ✨ Features

### Frontend

The frontend contains the main Zerodha-inspired website.

Features include:

* Home page
* About page
* Products page
* Pricing page
* Support page
* Signup page
* Navigation bar
* Footer
* Product information sections
* Pricing information
* Support and ticket section
* Responsive UI

### Dashboard

The dashboard provides a trading-platform-style interface.

It contains sections for:

* Holdings
* Positions
* Orders
* Buy/Sell actions
* Trading information
* Portfolio-related information
* Charts and graphical data

The dashboard communicates with the backend using REST APIs.

### Backend

The backend is responsible for:

* Handling API requests
* Connecting to MongoDB
* Managing holdings
* Managing positions
* Managing orders
* Processing buy/sell-related requests
* Sending data to the dashboard

The backend is built using:

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript
* React.js
* React Router
* Bootstrap

### Dashboard

* React.js
* Axios
* Chart.js
* React Chart.js 2
* Material UI

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Development Tools

* Visual Studio Code
* Git
* GitHub
* npm

---

## ⚙️ Requirements

Before running this project, make sure the following software is installed:

### 1. Node.js

Download and install Node.js from:

https://nodejs.org/

Check the installation:

```bash
node -v
npm -v
```

### 2. Git

Install Git from:

https://git-scm.com/

Check the installation:

```bash
git --version
```

### 3. MongoDB

You need a MongoDB database for the backend.

You can use:

* MongoDB Atlas
* Local MongoDB installation

Make sure you have a MongoDB connection string.

Example:

```text
mongodb+srv://username:password@cluster.mongodb.net/zerodha
```

---

## 📥 Installation

### Step 1 – Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/Sushmitapawar25/Zerodha-Clone.git
```

Move into the project directory:

```bash
cd Zerodha-Clone
```

---

## 🔧 Step 2 – Setup Backend

Open a terminal inside the project folder.

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

Replace:

```text
your_mongodb_connection_string
```

with your actual MongoDB connection string.

### Important

Do not upload your `.env` file to GitHub.

The `.gitignore` file should prevent environment files and `node_modules` from being uploaded.

---

## ▶️ Step 3 – Start Backend

Inside the `backend` folder, run:

```bash
npm start
```

or, if the project uses nodemon:

```bash
npm run dev
```

The backend server will start on the configured port.

For example:

```text
http://localhost:3000
```

---

## 💻 Step 4 – Setup Dashboard

Open a new terminal.

From the project root:

```bash
cd dashboard
```

Install dependencies:

```bash
npm install
```

Start the dashboard:

```bash
npm start
```

The dashboard will normally run on:

```text
http://localhost:3001
```

If another port is configured by your React application, use the port shown in the terminal.

---

## 🌐 Step 5 – Setup Frontend

Open another terminal.

From the project root:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm start
```

The frontend will normally run on:

```text
http://localhost:3000
```

If the port is already being used, React may automatically ask to run the application on another available port.

---

## 🔄 Running the Complete Project

To run the complete application, you need to run the three parts separately.

### Terminal 1 – Backend

```bash
cd backend
npm install
npm start
```

### Terminal 2 – Dashboard

```bash
cd dashboard
npm install
npm start
```

### Terminal 3 – Frontend

```bash
cd frontend
npm install
npm start
```

Keep all three terminals running while using the application.

---

## 🔌 Backend API

The backend provides REST APIs that allow the dashboard to communicate with the database.

Some of the main API operations include:

### Get Holdings

```http
GET /allHoldings
```

Used to retrieve holdings data.

### Add Holdings

```http
POST /addHoldings
```

Used to add holdings information to the database.

### Create Order

```http
POST /newOrder
```

Used to create a new order.

---

## 🗄️ Database

The project uses MongoDB to store application data.

Mongoose is used to define and manage database schemas.

The application contains data models related to areas such as:

* Holdings
* Positions
* Orders

The backend connects to MongoDB using the connection string stored in the environment variables.

---

## 🔐 Security

Sensitive information should never be directly written inside the source code.

For example:

* MongoDB username
* MongoDB password
* API keys
* Secret keys
* Environment variables

These values should be stored inside `.env` files.

Example:

```env
MONGO_URL=your_mongodb_connection_string
```

The `.env` file should not be committed to GitHub.

---

## 🚫 Files Ignored by Git

The project uses `.gitignore` to prevent unnecessary or sensitive files from being uploaded.

Examples include:

```text
node_modules/
.env
.env.local
.env.development
.env.production
build/
dist/
*.log
```

This keeps the GitHub repository clean and prevents sensitive configuration from being exposed.

---

## 🐛 Troubleshooting

### 1. npm install is not working

Make sure Node.js and npm are installed:

```bash
node -v
npm -v
```

Then run:

```bash
npm install
```

### 2. MongoDB connection error

Check:

* MongoDB is running
* MongoDB connection string is correct
* Username and password are correct
* Network access is configured if using MongoDB Atlas
* `.env` file is present in the backend directory

### 3. Port already in use

If the required port is already being used, stop the existing application or run the project on another available port.

### 4. Module not found

Run:

```bash
npm install
```

inside the specific project folder:

```text
backend/
dashboard/
frontend/
```

---

## 📌 Important Notes

This project is developed for educational and demonstration purposes.

It is inspired by the user interface and concepts of a modern online trading platform.

It is **not an official Zerodha application** and is **not affiliated with Zerodha**.

Do not use real financial credentials, API keys, or sensitive personal information while testing this project.

---

## 🚀 Future Improvements

Possible future improvements include:

* User authentication
* JWT-based authorization
* Real-time stock prices
* Real stock market API integration
* Advanced portfolio analytics
* Improved order management
* Watchlist functionality
* Real-time notifications
* Improved responsive design
* Deployment using cloud platforms
* Improved security and validation

---

## 👨‍💻 Author

**Sushmita Pawar**

B.E – Computer Engineering

GitHub: [Sushmitapawar25](https://github.com/Sushmitapawar25)

---

## 📄 License

This project is created for educational and learning purposes.

