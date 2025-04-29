import fetch from 'node-fetch';
import axios from 'axios';

const recyclableMaterials = [
  { name: '𝙿𝚕𝚊𝚜𝚝𝚒𝚌 𝙱𝚘𝚝𝚝𝚕𝚎', emoji: '🥤', coinValue: getRandomValue(5000, 20000) },
  { name: '𝙶𝚕𝚊𝚜𝚜 𝙹𝚊𝚛', emoji: '🍯', coinValue: getRandomValue(1000, 25000) },
  { name: '𝙰𝚕𝚞𝚖𝚒𝚗𝚞𝚖 𝙲𝚊𝚗', emoji: '🥫', coinValue: getRandomValue(1500, 30000) },
  { name: '𝙿𝚊𝚙𝚎𝚛', emoji: '📄', coinValue: getRandomValue(3000, 15000) },
  { name: '𝙲𝚊𝚛𝚍𝚋𝚘𝚊𝚛𝚍', emoji: '📦', coinValue: getRandomValue(8000, 18000) },
  // Add more recyclable materials here
];

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const config = {
  name: "collect",
  aliases: ["c", "gather"],
  description: "Collect recyclable materials and earn coins.",
  usage: "<text>",
  cooldown: 50,
  permissions: [0, 1, 2],
