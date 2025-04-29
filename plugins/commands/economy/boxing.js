import axios from 'axios';

const config = {
  name: "boxing",
  aliases: ["bx", "box"],
  description: "Play a boxing game with another player.",
  usage: "Use it then you'll know.",
  cooldown: 3,
  permissions: [0, 1, 2],
  isAbsolute: false,
  isHidden: false,
  credits: "Dymyrius",
}

async function onCall({ message, args }) {
  const { Users } = global.controllers;
  global.boxes || (global.boxes = new Map());
  const box = global.boxes.get(message.threadID);
  const boxing = (await axios.get("https://i.imgur.com/AmuVh7a.gif", {
    responseType: "stream"
  })).data;
  const ring = (await axios.get("https://i.imgur.com/OWd9m1i.jpg", {
    responseType: "stream"
  })).data;

  if (args[0] === "create") {
    if (box) {
      return global.api.sendMessage("[🥊 ⚠] » 𝙰 𝚋𝚘𝚡𝚒𝚗𝚐 𝚛𝚒𝚗𝚐 𝚑𝚊𝚜 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚋𝚎𝚎𝚗 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚒𝚗 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙.", message.threadID, message.messageID);
    }

    const betAmount = parseInt(args[1]);
    if (!betAmount || isNaN(betAmount) || betAmount < 500) {
      return global.api.sendMessage("[🥊 ⚠] » 𝚈𝚘𝚞 𝚗𝚎𝚎𝚍 𝚝𝚘 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚋𝚎𝚝 𝚊𝚖𝚘𝚞𝚗𝚝 (𝚖𝚒𝚗𝚒𝚖𝚞𝚖 𝟻𝟶𝟶$).", message.threadID, message.messageID);
