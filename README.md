# Chat-app (Socket.IO)

A simple real-time chat application built with **Node.js**, **Express**, and **Socket.IO**.

## Features
- Real-time message broadcasting (chat works across all connected clients)
- Static frontend served from `public/`

## Tech
- Node.js
- Express
- Socket.IO

## Setup
1. Go to the project folder:
   - `Node/Chat-app`
2. Install dependencies:
   - `npm install`

## Run
- Start the server:
  - `npm start`
- (Optional) Development mode with auto-restart:
  - `npm run dev`

The server runs on **http://localhost:9000**.

## Project structure
- `index.js` - Express + Socket.IO server
- `public/` - frontend assets (HTML/CSS/JS)

## How it works
- Each client connects via Socket.IO.
- When a client emits `chatMessage`, the server broadcasts it to everyone using `io.emit("message", message)`.