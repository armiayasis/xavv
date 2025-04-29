import fs from 'fs';
import axios from 'axios';
import { join } from 'path';

const config = {
  name: "plant",
  aliases: ["grow"],
  description: "Buy and grow plants",
  usage: "<buy/check/sell>",
  cooldown: 9,
  credits: "Ariél Violét (improved by: Rue)"
};

const langData = {
  "en_US": {
    "plant.buySuccess": "𝚈𝚘𝚞 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚋𝚘𝚞𝚐𝚑𝚝 𝚊 𝚙𝚕𝚊𝚗𝚝! 🪴 𝚈𝚘𝚞𝚛 𝚙𝚕𝚊𝚗𝚝 𝚠𝚒𝚕𝚕 𝚐𝚛𝚘𝚠 𝚘𝚟𝚎𝚛 𝚝𝚒𝚖𝚎.",
    "plant.buyFailure": "𝚈𝚘𝚞 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚑𝚊𝚟𝚎 𝚊 𝚙𝚕𝚊𝚗𝚝.",
    "plant.sellSuccess": "𝚈𝚘𝚞 𝚜𝚘𝚕𝚍 𝚢𝚘𝚞𝚛 𝚙𝚕𝚊𝚗𝚝 𝚏𝚘𝚛 ${amount} 💵",
    "plant.noPlant": "𝚈𝚘𝚞 𝚍𝚘𝚗'𝚝 𝚑𝚊𝚟𝚎 𝚊 𝚙𝚕𝚊𝚗𝚝. 𝚄𝚜𝚎 `𝚙𝚕𝚊𝚗𝚝 𝚋𝚞𝚢` 𝚝𝚘 𝚐𝚎𝚝 𝚘𝚗𝚎.",
    "plant.growthInfo": "𝚈𝚘𝚞𝚛 𝚙𝚕𝚊𝚗𝚝 𝚑𝚊𝚜 𝚐𝚛𝚘𝚠𝚗! 𝙸𝚝𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝 𝚟𝚊𝚕𝚞𝚎 𝚒𝚜 ${value} 💵.",
    "plant.checkInfo": "𝚈𝚘𝚞𝚛 𝚙𝚕𝚊𝚗𝚝 𝚟𝚊𝚕𝚞𝚎 𝚒𝚜: ${value}💰\n━━━━━━━━━━━━━━━\n𝙶𝚛𝚘𝚠𝚝𝚑 𝚟𝚊𝚕𝚞𝚎 𝚙𝚎𝚛 𝚌𝚢𝚌𝚕𝚎: +${growthValue}"
  }
};

let plantOwners = new Map();
const GROWTH_INTERVAL = 20 * 60 * 1000; // 20 minutes in milliseconds
