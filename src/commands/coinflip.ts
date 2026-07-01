import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('flips a coin!');

export async function execute(interaction: ChatInputCommandInteraction) {
    const roll = Math.floor(Math.random() * 2) + 1
    if (roll === 1) {
        return await interaction.reply('heads (орёл)')
    } else {
        return await interaction.reply('tails (решка)')
    }
}