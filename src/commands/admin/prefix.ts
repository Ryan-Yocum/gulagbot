import { Message } from "discord.js";
import { dc } from "../../bot";
import { checkAdmin } from "../../utils/checkPerms";

async function run(message: Message, args: string[]) {
  let prefix = args.join(' ');
  if (!message.member) return;
  if (!checkAdmin(message.member)) {
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