const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Используем полный URL для веб-интерфейса
  const webAppUrl = `${process.env.REACT_APP_API_URL}/edit-assistant/${userId}`;

  bot.sendMessage(chatId, 'Добро пожаловать! Выберите действие:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Редактировать ассистента', web_app: { url: webAppUrl } }]
      ]
    }
  });
});

console.log('Telegram bot is running...');
