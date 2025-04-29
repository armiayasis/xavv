import fs from 'fs';
import axios from 'axios';
import { join } from 'path';

const config = {
  name: "pet",
  aliases: ["animal"],
  description: "Buy, feed, and sell your virtual pet",
  usage: "<buy/feed/check/sell>",
  cooldown: 6,
  credits: "Gauxy"
};

const langData = {
  "en_US": {
    "pet.buySuccess": "⌜🎊⌟ : \n—  Congratulations, you've adopted a new pet named {petName}! ",
    "pet.buyFailure": "⌜🤦🏻‍♂️⌟ : \n—  You already have a pet. Take care of it!",
    "pet.feedSuccess": "⌜🍖⌟ : \n—  You fed {petName}. It looks happier now! 💕",
    "pet.feedCost": "⌜💰⌟ : \n— Feeding {petName} costs ${feedCost}.",
    "pet.feedFailure": "⌜🙅🏻‍♂️⌟ : \n— You can't feed a pet you don't own.",
    "pet.noPet": "⌜🤷🏻‍♂️⌟ : \n— You don't have a pet. Use `pet buy` to get one.",
    "pet.checkInfo": "⌜💁🏻‍♂️⌟ : \n— Your pet {petName} has grown worth ${petValue}💰. Don't forget to feed it.",
    "pet.sellSuccess": "⌜💰⌟ : \n— You sold {petName} for ${amount}. Goodbye, little friend!",
    "pet.sellFailure": "⌜🙅🏻‍♂️⌟ : \n—  You can't sell a pet.",
