import { Guild, GuildMember, MessageReaction, User } from "discord.js";
import path from "path";
import { dc, sb } from "../../bot";
import sounds from "../../static/soundboard/sounds";

let event = 'messageReactionAdd';

async function run(messageReaction: MessageReaction, user: User) {
  if (messageReaction.message.id !== sb.msgID) return;
  if (user.bot) return;
  messageReaction.users.remove(user);
  if (messageReaction.emoji.name === '❌') {
    if (!sb.conn) return;
    sb.leave();
    return;
  }
  let sound = sounds.find(s => {
    return s.value === messageReaction.emoji.name;
  });
  let guild = dc.guilds.cache.get(dc.state.get('guildId')) as Guild;
  let member = guild.members.cache.get(user.id) as GuildMember;
  if (!member.voice.channelID) return;
  let fileName = sound?.file as string;
  let file = path.join(__dirname, '../../static/soundboard/clips', fileName);
  sb.play(member, file);
}

module.exports = {
  event,
  run
}