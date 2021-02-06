import { Message } from "discord.js";
import { dc } from "../../bot";

let event = 'message';

async function run(message: Message) {
  if (!message.content.startsWith(dc.state.get('prefix'))) return;
  if (message.author.bot) return;
  let args = message.content.substring(dc.state.get('prefix').length, message.content.length).split(' ');
  let command = args.shift();
  if (!command) return;
  if (dc.commands.has(command)) {
    dc.commands.get(command)?.run(message, args);
  }
  else {
    message.reply('That command does not exist');
  }
}

module.exports = {
  event,
  run
};