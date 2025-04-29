const config = {
  name: "lotto",
  aliases: ["lottery"],
  description: "Play the lottery game!",
  usage: "e.g., #lotto 5 10 15 20",
  cooldown: 1,
  permissions: [0, 1, 2],
  credits: "Ariél Violét"
};

// Define a map to store the last time a user input 4 different numbers
const userLastInputTime = new Map();

export async function onCall({ message }) {
  // Check if there is a message and message content
  const { Users } = global.controllers;
  const bet = BigInt(500000000);
  const userMoney = await Users.getMoney(message.senderID) || null;

  if (userMoney === null) return message.reply("▄═━一 Your data is not ready yet.⌛⌛ ╾━╤デ╦︻");
  if (BigInt(userMoney) < bet) return message.reply("𝙸𝚗𝚜𝚞𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚋𝚊𝚕𝚊𝚗𝚌𝚎");
  if (bet < BigInt(500000000)) return message.reply("𝙸𝚗𝚜𝚞𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚋𝚊𝚕𝚊𝚗𝚌𝚎"); // Changed the minimum bet amount

  // Get parameters from the message
  const args = message.args;
  const result = args.slice(1, 5).map(Number);

  if (result.length < 1) {
    return await message.reply("𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝘁𝗵𝗲 𝗹𝗼𝘁𝘁𝗲𝗿𝘆 𝗴𝗮𝗺𝗲!\n\n" +
      "𝚃𝚘 𝚙𝚕𝚊𝚢, 𝚎𝚗𝚝𝚎𝚛 𝟺 𝚗𝚞𝚖𝚋𝚎𝚛𝚜 𝚋𝚎𝚝𝚠𝚎𝚎𝚗 𝟷 𝚊𝚗𝚍 𝟳𝟻, 𝚜𝚎𝚙𝚊𝚛𝚊𝚝𝚎𝚍 𝚋𝚢 𝚜𝚙𝚊𝚌𝚎𝚜, 𝚕𝚒𝚔𝚎 𝚝𝚑𝚒𝚜: `#lottery 5 10 15 20`.\n━━━━━━━━━━━━━\n" +

