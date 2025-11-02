const TelegramBot = require('node-telegram-bot-api');
const token = '8588062704:AAFELdxWTTvgcBKg4PcKCKittotOFO0ZPH8';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/calc (\d+) (\d+)/, (msg, match) => {
  const first = parseFloat(match[1]);
  const second = parseFloat(match[2]);
  const total = first + (second * 0.5);
  
  bot.sendMessage(msg.chat.id, 
    `💰 Итог: ${total} руб\n` +
    `(${first} + ${second}×0.5 = ${first + second*0.5})`
  );
});

bot.on('message', (msg) => {
  if (!msg.text.startsWith('/calc')) {
    bot.sendMessage(msg.chat.id, 'Напиши: /calc цена1 цена2\nНапример: /calc 4900 4900');
  }
});

console.log('Бот запущен!');
