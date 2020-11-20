const Discord = require('discord.js');

if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const { registerCommands, registerEvents, registerHooks } = require('./utils/registry');
const { setState } = require('./utils/state');

const dc = new Discord.Client();
dc.commands = new Discord.Collection();
dc.state = new Discord.Collection();
dc.hooks = new Discord.Collection();
setState(dc);
registerEvents(dc);
registerCommands(dc);
registerHooks(dc);

dc.login(process.env.BOT_TOKEN);