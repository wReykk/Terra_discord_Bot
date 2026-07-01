import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

// Описание команды (как она будет выглядеть в Discord)
export const data = new SlashCommandBuilder()
    .setName('marco')
    .setDescription('Classic game: answer "Polo!"');

// Сама логика (что бот делает при вызове)
export async function execute(interaction: ChatInputCommandInteraction) {
    // reply отправляет ответ прямо в чат
    await interaction.reply('Polo! 🏓');
}