import { REST, Routes } from 'discord.js';
import * as dotenv from 'dotenv';
import { data as marcoCommand } from './src/commands/marco';
import { data as rollCommand } from './src/commands/roll';
import { data as coinflipCommand } from './src/commands/coinflip';
import { data as eigthballCommand } from './src/commands/eightBall';
import { data as russianRouletteCommand } from './src/commands/russianRoulette';

dotenv.config();

const commands = [
    marcoCommand.toJSON(),
    rollCommand.toJSON(),
    coinflipCommand.toJSON(),
    eigthballCommand.toJSON(),
    russianRouletteCommand.toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

async function deploy() {
    try {
        console.log(`Updating ${commands.length} slash-commands...`);

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