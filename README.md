# Lead Manager Backend

This is the backend for the Lead Manager application, built using Node.js, Express, and MongoDB. It follows the MVC (Model-View-Controller) architecture to ensure clean and scalable code.

## 🚀 Features
- Add new leads
- Fetch all leads
- Uses MongoDB with Mongoose for database management
- Hosted on Render: [Lead Manager Backend](https://lead-manager-backend.onrender.com)

## 🛠️ Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Dotenv** - For environment variables
- **Cors** - Enables Cross-Origin Resource Sharing

## 🏗️ Project Structure (MVC)
```
backend/
│-- config/        # Database configuration
│-- controllers/   # Business logic
│-- models/        # Mongoose schema definitions
│-- routes/        # API routes
│-- middleware/    # Middleware functions (if any)
│-- server.js      # Entry point
│-- .env           # Environment variables
│-- package.json   # Dependencies and scripts
```

## 🏃‍♂️ Running Locally

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/)

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/sanctity2k5/lead-manager---backend.git
   ```
2. Navigate to the project folder:
   ```sh
   cd lead-manager-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Start the server:
   ```sh
   npm run dev
   ```
6. The server will run on `http://localhost:5000`

## 🔗 API Endpoints

### Base URL: [https://lead-manager-backend.onrender.com](https://lead-manager-backend.onrender.com)

| Method | Endpoint  | Description |
|--------|----------|-------------|
| POST   | `/leads` | Add a new lead |
| GET    | `/leads` | Fetch all leads |

## 🌎 Hosting
This backend is deployed on [Render](https://render.com) and can be accessed via [Lead Manager Backend](https://lead-manager-backend.onrender.com).

