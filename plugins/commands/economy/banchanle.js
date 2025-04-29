import axios from 'axios';

const config = {
  name: "even-odd",
  aliases: ["eo"],
  description: "Play even-odd with multiplayer.",
  usage: "Use it then you'll know.",
  cooldown: 3,
  permissions: [0, 1, 2],
  isAbsolute: false,
  isHidden: false,
  credits: "Sies",

}

const { api } = global;
async function onCall({ message, args, getLang, extra, data, userPermissions, prefix }) {
  // Do something
  try {
    const { senderID, threadID, messageID, body, send, reply, react } = message;
    const { Users } = global.controllers
    global.chanle || (global.chanle = new Map);
    var bcl = global.chanle.get(message.threadID);
    const anhbcl = (await axios.get("https://i.imgur.com/u7jZ2Js.jpg", {
      responseType: "stream"
    })).data;
    switch (args[0]) {
      case "create":
      case "new":
      case "-c": {
        if (!args[1] || isNaN(args[1])) return global.api.sendMessage("[SIES-WARN ⚠] » You need to enter a reservation amount!", message.threadID, message.messageID);
        if (parseInt(args[1]) < 500) return global.api.sendMessage("[SIES-WARN ⚠] » Amount must be greater than or equal to 500!", message.threadID, message.messageID);
        const userMoney = await Users.getMoney(message.senderID) || null;
        if (userMoney < parseInt(args[1])) return global.api.sendMessage(`[SIES-WARN ⚠] » You don't have enough ${args[1]} to create a new game table!`, message.threadID, message.messageID);
