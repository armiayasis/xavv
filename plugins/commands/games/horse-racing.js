// Import the required modules
import axios from 'axios';

// Configuration for the horse racing game
const config = {
  name: "horse-racing",
  aliases: ["hr"],
  description: "Play horse racing with multiplayer.",
  usage: "Use it then you'll know.",
  cooldown: 3,
  permissions: [0, 1, 2],
  isAbsolute: false,
  isHidden: false,
  credits: "Dymyrius",
};

// Define the horseImages array outside the onCall function
const horseImages = [
  // URLs of horse images
  // Add or modify horse images as needed
  { number: 1, url: "https://i.imgur.com/I7ZElJ0.png" },
  { number: 2, url: "https://i.imgur.com/cRBu7li.png" },
  { number: 3, url: "https://i.imgur.com/SOaK0P6.png" },
  { number: 4, url: "https://i.imgur.com/NjiaX1B.png" },
  { number: 5, url: "https://i.imgur.com/ZY4m1zd.png" },
  { number: 6, url: "https://i.imgur.com/5F6VC3q.png" },
  { number: 7, url: "https://i.imgur.com/Ff5w1Me.png" },
  { number: 8, url: "https://i.imgur.com/DhEzQp9.png" },
  { number: 9, url: "https://i.imgur.com/F29yd5M.png" },
];

async function startRacingGame(threadID, bcl, message) {
  const horseRaceGif = (await axios.get("https://i.imgur.com/mHdw73G.png", {
