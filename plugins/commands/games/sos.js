import axios from 'axios';

const config = {
  name: "sos",
  aliases: [],
  description: "Play S-O-S game with another player.",
  usage: "Use it then you'll know.",
  cooldown: 3,
  permissions: [0, 1, 2],
  isAbsolute: false,
  isHidden: false,
  credits: "Dymyrius",
};

const BOARD_SIZE = 5; // Modified to a 5x5 grid
const EMPTY_CELL = ' ';
const PLAYER_X = '🆂'; // Updated symbol for player X (S)
const PLAYER_O = '🇴'; // Updated symbol for player O (O)

function createEmptyBoard() {
  return Array.from(Array(BOARD_SIZE), () => Array(BOARD_SIZE).fill(EMPTY_CELL));
}

function printBoard(board) {
  let result = '';
  for (let i = 0; i < BOARD_SIZE; i++) {
    result += board[i].map(cell => cell === EMPTY_CELL ? '⬜' : cell).join(' | ') + '\n';
    if (i < BOARD_SIZE - 1) {
      result += '━━━━━━━━━━\n';
    }
  }
  return result;
}

  // Modify the checkWin function to handle 5x5 grid
function checkWin(board, player) {
  let count = 0;

  // Check rows, columns, and diagonals for SOS formations
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === player) {
        // Check horizontal
