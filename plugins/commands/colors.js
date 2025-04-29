import axios from 'axios';

const config = {
  name: "color-color",
  aliases: ["cc", "color"],
  description: "Play color-color game with betting.",
  usage: "[red/🔴] | [blue/🔵] | [yellow/🟡] [bet]",
  cooldown: 3,
  permissions: [0, 1, 2],
  isAbsolute: false,
  isHidden: false,
  credits: "Dymyrius (inspired by Sies)",
};

async function onCall({ message, args }) {
  try {
    const { senderID, threadID, body } = message;
    const { Users } = global.controllers;
    const colors = [
      { emoji: '🔴', word: 'red' },
      { emoji: '🔵', word: 'blue' },
      { emoji: '🟡', word: 'yellow' }
    ];
    const chosenColor = args[0]?.toLowerCase();
    const betAmount = parseInt(args[1]);

    if (!chosenColor || !betAmount || isNaN(betAmount)) {
      return global.api.sendMessage("[DYMY-WARN ⚠] » Invalid command usage! \nPlease use it like this: !color <chosen color> <bet amount>", threadID);
    }

    const chosenColorData = colors.find(color => color.emoji === chosenColor || color.word === chosenColor);

    if (!chosenColorData) {
