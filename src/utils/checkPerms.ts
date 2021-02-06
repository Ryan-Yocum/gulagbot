import { Channel, GuildMember } from "discord.js";
import { dc } from "../bot";

export function checkOwner(member: GuildMember) {
  return (member.guild.ownerID === member.id) ? true : false;
}

export function checkAdmin(member: GuildMember) {
  return member.hasPermission(8);
}

export function checkDungon(member: GuildMember) {
  const chanId = dc.state.get('dungon');
  if (!dc.channels.cache.has(chanId)) return;
  const chan = dc.channels.cache.get(chanId) as Channel;
  return member.permissionsIn(chan).has(2048);
}