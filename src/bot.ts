import { DiscordClient } from './classes/Client';
import { registerCommands, registerEvents, registerHooks } from './utils/registry';
import { setState } from './utils/state';
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const dc: DiscordClient = new DiscordClient();

setState(dc);
registerEvents(dc);
registerCommands(dc);
registerHooks(dc);

dc.login(process.env.BOT_TOKEN);