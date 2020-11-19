const Discord = require('discord.js');

const hook = new Discord.WebhookClient(process.env.KEEPER_ID, process.env.KEEPER_TOKEN);
module.exports = hook;