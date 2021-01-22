import { Message, TextChannel, VoiceChannel } from "discord.js";
import { DiscordClient } from "../../classes/Client";

let aliases = ['p']

async function run(dc: DiscordClient, message: Message, args: string[]) {
  const portal = dc.channels.cache.get(dc.state.get('portal').portalId) as VoiceChannel;
  const privateChan = dc.channels.cache.get(dc.state.get('portal').privateId) as VoiceChannel;
  const privateChat = dc.channels.cache.get(dc.state.get('portal').privateChatId) as TextChannel;
  if (!privateChat) return;
  if (!message.member) return;
  if (!portal) return;
  if (!message.member.permissionsIn(privateChat).has(1024)) {
    message.reply('You do not have permission to use that command.');
    return;
  }
  if (args.join(' ') == 'open') {
    dc.state.get('portal').state = true;
    message.reply('The Portal has been opened');
    let mems = portal.members;
    mems.forEach(e => {
      e.voice.setChannel(privateChan);
    });
  }
  else if (args.join(' ') == 'close') {
    dc.state.get('portal').state = false;
    message.reply('The Portal has been closed');
  }
  else {
    message.reply('You must specify open or close');
  }
}

module.exports = {
  run,
  aliases
}