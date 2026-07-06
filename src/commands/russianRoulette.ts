import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('roulette')
    .setDescription('Play russian Roulette!');

export async function execute(interaction: ChatInputCommandInteraction) {
    const bullet = Math.floor(Math.random() * 6) + 1
    if (bullet === 1) {
        return await interaction.reply("*BOOM💥*! You're dead!")
    } else {
        return await interaction.reply("*Click*... Ts... You're lucky today.")
    }
}