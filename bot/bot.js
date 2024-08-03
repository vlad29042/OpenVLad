const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  const webAppUrl = `https://92ef-109-248-253-122.ngrok-free.app/edit-assistant/${userId}`;

  bot.sendMessage(chatId, 'Добро пожаловать! Выберите действие:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Редактировать ассистента', web_app: { url: webAppUrl } }]
      ]
    }
  });
});

console.log('Telegram bot is running...');
