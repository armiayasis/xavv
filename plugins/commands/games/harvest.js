import fetch from 'node-fetch';
import axios from 'axios';

const vegetables = [
  { name: 'Carrot', coinValue: getRandomValue(5000, 10000), emoji: '🥕' },
  { name: 'Tomato', coinValue: getRandomValue(7000, 12000), emoji: '🍅' },
  { name: 'Broccoli', coinValue: getRandomValue(8000, 15000), emoji: '🥦' },
  { name: 'Spinach', coinValue: getRandomValue(6000, 11000), emoji: '🍃' },
  { name: 'Pepper', coinValue: getRandomValue(9000, 16000), emoji: '🌶️' },
  { name: 'Cucumber', coinValue: getRandomValue(4000, 90000), emoji: '🥒' },
  { name: 'Zucchini', coinValue: getRandomValue(6000, 11000), emoji: '🥒' },
  { name: 'Lettuce', coinValue: getRandomValue(5000, 10000), emoji: '🥬' },
  { name: 'Onion', coinValue: getRandomValue(3000, 70000), emoji: '🧅' },
  { name: 'Potato', coinValue: getRandomValue(6000, 12000), emoji: '🥔' },
  { name: 'Eggplant', coinValue: getRandomValue(7000, 13000), emoji: '🍆' },
  { name: 'Corn', coinValue: getRandomValue(4000, 90000), emoji: '🌽' },
  { name: 'Radish', coinValue: getRandomValue(4000, 80000), emoji: '🍽️' },
