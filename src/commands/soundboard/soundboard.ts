import { Message } from "discord.js";
import { sb } from "../../bot";

let aliases = ['sb'];

async function run(message: Message, args: string[]) {
  if (!message.member) return;
  if (args[0] === 'setup') {
    sb.setup(message.member);
    return;
  }
  if (!message.member.voice.channelID) {
    message.reply('You must be in a voice channel to use that command');
    return;
  }
  switch (args[0]) {
    case 'join':
      if (sb.conn) {
        message.reply('I am already in a voice channel!');
        return;
      }
      sb.join(message.member);
      break;

    case 'leave':
      sb.leave();
      break;

    case 'stop':
      if (!sb.disp) {
        message.reply('There is nothing playing');
      }
      sb.stop();
      break;
  }
}

module.exports = {
  aliases,
  run
}