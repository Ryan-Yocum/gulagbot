import { DiscordClient } from './classes/Client';
import { SoundBoard } from './classes/SoundBoard';
import { registerCommands, registerEvents, registerHooks } from './utils/registry';
import { setState } from './utils/state';
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

export const dc: DiscordClient = new DiscordClient();
export const sb: SoundBoard = new SoundBoard();
setState();
registerEvents();
registerCommands();
registerHooks();

dc.login(process.env.BOT_TOKEN);