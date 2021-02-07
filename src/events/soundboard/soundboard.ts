import { MessageReaction, User } from "discord.js";
import { sb } from "../../bot";

let event = 'messageReactionAdd';

async function run(messageReaction: MessageReaction, user: User) {
  if (messageReaction.message.id !== sb.msgID) return;
  if (user.bot) return;
  messageReaction.users.remove(user);
}

module.exports = {
  event,
  run
}