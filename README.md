# Cyberwar Banking Defense Simulator

A full-stack cybersecurity simulation platform built using React, TypeScript, Node.js, and Express.

---

## Features

- Real-time cyber attack simulation
- Threat intelligence dashboard
- Financial damage analysis
- Incident tracking system
- Banking infrastructure simulation
- Live attack feed
- Threat level monitoring

---

## Technologies Used

### Frontend
- React
- TypeScript
- Axios
- Vite

### Backend
- Node.js
- Express.js
- TypeScript

---

## Project Structure

```bash
Cyberwar-Banking-Defense/
│
├── client/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   ├── src/
│   ├── routes/
│   ├── simulation/
│   ├── services/
│   └── package.json
│
└── README.md
Installation & Setup
Backend Setup
cd server
npm install
npm run dev
Frontend Setup
cd client
npm install
npm run dev
API Endpoint
Simulate Cyber Attack
GET /simulate-attack
Example Response
{
  "target": "ATM Network",
  "attackType": "Ransomware",
  "attackStrength": 85,
  "defenseStrength": 60,
  "success": true,
  "damage": 1200000
}
Project Highlights
Simulates cyber attacks on banking systems

Calculates financial damage dynamically

Displays live cybersecurity incidents

Tracks successful and blocked attacks

Shows threat intelligence analytics

Dashboard Features
Total attacks counter

Successful breach tracking

Threat level monitoring

Financial damage analytics

Incident history feed

Real-time simulation updates

Future Enhancements
PostgreSQL database integration

Authentication system

Real-time socket updates

Advanced analytics charts

AI-based threat prediction

Network visualization dashboard

Author
Shagun
