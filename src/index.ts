import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

// 1. Загружаем переменные из файла .env
dotenv.config();

// 2. Создаем клиента Discord с нужными правами (Intents)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Обязательно для чтения сообщений (RAG-системе это нужно)
  ],
});

// 3. Слушаем событие готовности (сработает один раз при успешном запуске)
client.once('ready', (readyClient) => {
  console.log(`Started: ${readyClient.user.tag}`);
});

// Слушаем все взаимодействия с ботом
client.on('interactionCreate', async (interaction) => {
  // Если это не слэш-команда (например, нажатие кнопки), игнорируем
  if (!interaction.isChatInputCommand()) return;

  // Временно сделаем простую проверку по имени команды
  if (interaction.commandName === 'marco') {
    // Подключаем наш файл с командой и запускаем её
    const { execute } = await import('./commands/marco');
    await execute(interaction);
  }
  if (interaction.commandName === 'roll') {
    const { execute } = await import('./commands/roll');
    await execute(interaction);
  }
  if (interaction.commandName === 'coinflip') {
    const { execute } = await import('./commands/coinflip');
    await execute(interaction);
  }
  if (interaction.commandName === '8ball') {
    const { execute } = await import('./commands/eightBall');
    await execute(interaction);
  }
});

// 4. Подключаем бота к серверам Discord
client.login(process.env.DISCORD_TOKEN);