import fs from 'fs';
import axios from 'axios';
import { join } from 'path';

const config = {
  name: "pokemon",
  aliases: ["poke"],
  description: "Play Pokémon game.",
  usage: "",
  cooldown: 1,
  credits: "Dymyrius"
};

const langData = {
  "en_US": {
    "pokemon.noPokémon": "You don't have any Pokémon. Use `pokemon buy` to buy one.",
    "pokemon.buySuccess": "Congratulations! You've purchased a Pokémon named {pokemonName}!",
    "pokemon.buyFailure": "You don't have enough credits to buy a Pokémon.",
    "pokemon.feedSuccess": "You fed your {pokemonName}! Its level has increased to {newLevel}.",
    "pokemon.feedSuccessEvolved": "You fed your evolved {pokemonName}! Its level has increased to {newLevel}.",
    "pokemon.feedFailure": "You don't have any Pokémon to feed.",
    "pokemon.checkStatus": "📛 𝗣𝗼𝗸é𝗺𝗼𝗻 𝗡𝗮𝗺𝗲: {pokemonName}\n🆙 𝗟𝗲𝘃𝗲𝗹: {pokemonLevel}\n⬆️ 𝗣𝗼𝘄𝗲𝗿 𝗟𝗲𝘃𝗲𝗹: {pokemonPower}\n🪙 𝗖𝗼𝗹𝗹𝗲𝗰𝘁𝗮𝗯𝗹𝗲 𝗩𝗮𝗹𝘂𝗲: ${pokemonValue}\n━━━━━━━━━━━━\n🏆 𝗪𝗶𝗻: {totalWins}\n🪦 𝗟𝗼𝘀𝘀: {totalLosses}",
    "pokemon.menuOptions": "◦❭❯❱【𝐏𝐨𝐤é𝐦𝐨𝐧 𝐁𝐚𝐭𝐭𝐥𝐞 𝐆𝐚𝐦𝐞】❰❮❬◦\n\n1. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘣𝘢𝘵𝘵𝘭𝘦` » 𝖲𝗍𝖺𝗋𝗍 𝖺 𝖻𝖺𝗍𝗍𝗅𝖾 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎𝗋 𝖯𝗈𝗄é𝗆𝗈𝗇.\n2. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘭𝘪𝘴𝘵` » 𝖫𝗂𝗌𝗍 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖯𝗈𝗄é𝗆𝗈𝗇 𝗇𝖺𝗆𝖾𝗌.\n3. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘣𝘶𝘺 <𝗉𝗈𝗄𝖾𝗆𝗈𝗇𝖭𝖺𝗆𝖾>` » 𝖡𝗎𝗒 𝖯𝗈𝗄é𝗆𝗈𝗇.\n4. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘯𝘪𝘤𝘬𝘯𝘢𝘮𝘦 <𝗇𝗂𝖼𝗄𝗇𝖺𝗆𝖾>` » 𝖲𝖾𝗍 𝖺 𝗇𝗂𝖼𝗄𝗇𝖺𝗆𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝗉𝗈𝗄𝖾𝗆𝗈𝗇.\n5. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘧𝘦𝘦𝘥` » 𝖥𝖾𝖾𝖽 𝗒𝗈𝗎𝗋 𝖯𝗈𝗄é𝗆𝗈𝗇.\n6. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘤𝘩𝘦𝘤𝘬` » 𝖢𝗁𝖾𝖼𝗄 𝗒𝗈𝗎𝗋 𝖯𝗈𝗄é𝗆𝗈𝗇 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇.\n7. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘤𝘩𝘢𝘭𝘭𝘦𝘯𝘨𝘦 @𝘶𝘴𝘦𝘳` » 𝖢𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾 𝖺𝗇𝗈𝗍𝗁𝖾𝗋 𝗎𝗌𝖾𝗋 𝗍𝗈 𝖺 𝖯𝗈𝗄é𝗆𝗈𝗇 𝖻𝖺𝗍𝗍𝗅𝖾.\n    • `𝘱𝘰𝘬𝘦 𝘢𝘤𝘤𝘦𝘱𝘵` » 𝖠𝖼𝖼𝖾𝗉𝗍 𝗍𝗁𝖾 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾.\n    • `𝘱𝘰𝘬𝘦 𝘥𝘦𝘤𝘭𝘪𝘯𝘦` » 𝖣𝖾𝖼𝗅𝗂𝗇𝖾 𝗍𝗁𝖾 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾.\n8. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘵𝘳𝘢𝘥𝘦 @𝘶𝘴𝘦𝘳` » 𝖳𝗋𝖺𝖽𝖾 𝖯𝗈𝗄é𝗆𝗈𝗇 𝗐𝗂𝗍𝗁 𝖺𝗇𝗈𝗍𝗁𝖾𝗋 𝗎𝗌𝖾𝗋.\n9. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘤𝘰𝘯𝘧𝘪𝘳𝘮 @𝘶𝘴𝘦𝘳` » 𝖠𝖼𝖼𝖾𝗉𝗍 𝗍𝗁𝖾 𝗍𝗋𝖺𝖽𝖾 𝖿𝗋𝗈𝗆 𝖺𝗇𝗈𝗍𝗁𝖾𝗋 𝗎𝗌𝖾𝗋.\n10. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘤𝘰𝘭𝘭𝘦𝘤𝘵` » 𝖢𝗈𝗅𝗅𝖾𝖼𝗍 𝗍𝗁𝖾 𝗂𝗇𝖼𝗋𝖾𝖺𝗌𝖾𝖽 𝗏𝖺𝗅𝗎𝖾 𝗈𝖿 𝗒𝗈𝗎𝗋 𝖯𝗈𝗄é𝗆𝗈𝗇.\n11. `𝘱𝘰𝘬𝘦𝘮𝘰𝘯 𝘳𝘦𝘭𝘦𝘢𝘴𝘦 » 𝖳𝗈 𝗋𝖾𝗅𝖾𝖺𝗌𝖾 𝗒𝗈𝗎𝗋 𝖼𝗎𝗋𝗋𝖾𝗇𝗍 𝖯𝗈𝗄é𝗆𝗈𝗇."
