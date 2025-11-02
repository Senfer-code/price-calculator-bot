const TelegramBot = require('node-telegram-bot-api');
const token = '8588062704:AAFELdxWTTvgcBKg4PcKCKittotOFO0ZPH8';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const text = msg.text;
  
  // Игнорируем команды
  if (text.startsWith('/')) return;
  
  // Проверяем, что сообщение содержит 2 числа
  const numbers = text.match(/\d+/g);
  if (numbers && numbers.length >= 2) {
    const first = parseFloat(numbers[0]);
    const second = parseFloat(numbers[1]);
    const total = first + (second * 0.5);
    
    bot.sendMessage(msg.chat.id, 
      `💰 Итог: ${total} руб\n` +
      `(${first} + ${second}×0.5 = ${first + second*0.5})`
    );
  } else {
    bot.sendMessage(msg.chat.id, 
      'Просто введи две цены через пробел:\n' +
      '4900 4900\n' +
      '5000 4000\n' +
      '6000 5500'
    );
  }
});

console.log('Бот запущен!');
