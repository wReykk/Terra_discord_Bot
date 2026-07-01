import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask your question to 8ball')
    .addStringOption(option =>
        option.setName('question')
            .setDescription('Here goes your question:')
            .setRequired(true)
    )

export async function execute(interaction: ChatInputCommandInteraction) {
    const question = interaction.options.getString('question')

    const answers = [
        'Absolutely!',
        'Probably.',
        'Not sure...',
        'Ask later.',
        'Yes and no.',
        'Not really...',
        'Absolutely not!',
        'Better not to know.'
    ]

    const randomAnswer = Math.floor(Math.random() * answers.length)
    await interaction.reply(`The question: ${question}. My answer is: ${answers[randomAnswer]}`);
}