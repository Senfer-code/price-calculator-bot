const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const token = '8588062704:AAFELdxWTTvgcBKg4PcKCKittotOFO0ZPH8';
const bot = new TelegramBot(token, {polling: true});

// Простой веб-сервер для Render
app.get('/', (req, res) => {
  res.send('🤖 Bot is running! Use: 4900 4900');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Логика бота
bot.on('message', (msg) => {
  const text = msg.text?.trim();
  if (!text || text.startsWith('/')) return;
  
  const numbers = text.split(/\s+/).map(Number).filter(n => !isNaN(n));
  if (numbers.length >= 2) {
    const [first, second] = numbers;
    const total = first + (second * 0.5);
    
    bot.sendMessage(msg.chat.id, 
      `💰 Итог: ${total} руб\n` +
      `(${first} + ${second}×0.5 = ${first + second*0.5})`
    );
  } else {
    bot.sendMessage(msg.chat.id, 
      'Введи две цены через пробел:\n' +
      '4900 4900\n' +
      '5000 4000'
    );
  }
});

console.log('Бот запущен!');
