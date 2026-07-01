import { REST, Routes } from 'discord.js';
import * as dotenv from 'dotenv';
import { data as marcoCommand } from './src/commands/marco'; // Подключаем данные нашей команды

dotenv.config();

// Собираем все команды в массив
const commands = [
    marcoCommand.toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

async function deploy() {
    try {
        console.log(`Updating ${commands.length} slash-commands...`);

        // Отправляем команды в Discord
        // ВАЖНО: Замените APP_ID на ID вашего приложения из Developer Portal
        await rest.put(
            Routes.applicationCommands(process.env.APP_ID!),
            { body: commands },
        );

        console.log('Slash-commands are successfully updated!');
    } catch (error) {
        console.error(error);
    }
}

deploy();