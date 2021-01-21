import { Message } from "discord.js";
import { DiscordClient } from "../../classes/Client";

async function run(dc: DiscordClient, message: Message, args: string[]) {
  let prefix = args.join(' ');
  if (!message.member) return;
  if (!message.member.hasPermission(32)) {
    message.reply('You do not have sufficient permissions');
    return;
  }
  if (args.length == 0) {
    message.reply('No prefix was given')
    return;
  }
  dc.state.set('prefix', prefix);
  message.reply('The prefix has been updated');
}

module.exports = {
  run
}