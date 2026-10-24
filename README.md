# Daymark — MERN Task Manager

Daymark is a responsive task manager with a React interface and an Express/MongoDB API. It includes task creation, completion, deletion, search, categories, due filters, and priorities. If the API is unavailable, the interface stays usable and saves demo tasks in this browser’s local storage.

## Start the interface

1. Install [Node.js](https://nodejs.org/).
2. From this project folder, run `npm install`.
3. Run `npm run dev` and open the Vite URL shown in the terminal.

The sample task list works immediately. The frontend will use the database API automatically when it is running.

## Connect MongoDB

1. Install and start MongoDB locally, or create a free MongoDB Atlas cluster.
2. Copy `server/.env.example` to `server/.env`.
3. Put your MongoDB connection string in `MONGODB_URI`.
4. `npm run dev` starts the React app and API together.

The API runs at `http://localhost:5000`; Vite proxies `/api` calls to it. Do not commit `.env` or database credentials.

## Stack

React · Vite · JavaScript · CSS · Node.js · Express · MongoDB · Mongoose
