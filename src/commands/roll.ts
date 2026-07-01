import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('roll')
    .setDescription('rolls a d6!')
    .addIntegerOption(option =>
        option.setName('sides')
            .setDescription('Number of sides (6 is default)')
            .setRequired(false)
    )

export async function execute(interaction: ChatInputCommandInteraction) {
    const sides = interaction.options.getInteger('sides') || 6
    const result = Math.floor(Math.random() * sides) + 1
    await interaction.reply(`The result of throwing ${sides}-sided die is: ${result}!`);
}