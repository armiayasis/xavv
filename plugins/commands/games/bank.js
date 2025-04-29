import axios from 'axios';
import { join } from 'path'; import fs from 'fs/promises';
import Decimal from 'decimal.js'; 

const PATH = join(global.assetsPath, 'bankOwner.json'); 

const config = {
  name: 'bank',
  aliases: ["bk", "b", "banking"],
  description: 'Bank Online',
  usage: '<Use command to show menu>',
  cooldown: 3,
  permissions: [0, 1, 2],
  credits: 'Dymyrius (Referenced from Waifucat and Ariel Violet)',
  extra: {}
};

const langData = {
  "en_US": {
    "no.account": "【 ℹ 】➜ You don't have an account yet!",
    "have.account": "【 ℹ 】➜ You already have an account!",
    "error": "【 ⚠ 】➜ Error, please try again!",
    "no.name": "【 ⚠ 】➜ Please add your bank name.",
    "success": "【 ℹ 】➜ Successful!",
    "fail": "【 ⚠ 】➜ Failed!",
    "loan.requested": "【 ℹ 】➜ Loan request of {loanAmount} has been submitted for approval.",
    "loan.approved": "【 ℹ 】➜ Loan request for {bankName} has been approved.",
    "loan.denied": "【 ℹ 】➜ Loan request for {bankName} has been denied.",
    "loan.list": "━━【Request Lists】━━\n\n{userList}",
    "no.money": "【 ℹ 】➜ You don't have enough money!",
