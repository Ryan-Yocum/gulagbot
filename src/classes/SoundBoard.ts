import { GuildMember, MessageEmbed, TextChannel, VoiceChannel, VoiceConnection } from "discord.js";
import { dc } from "../bot";
import { checkAdmin } from "../utils/checkPerms";

export class SoundBoard {
  public conn: VoiceConnection | undefined;

  async setup(member: GuildMember) {
    if (!checkAdmin(member)) return;
    const embed = new MessageEmbed()
      .setTitle('SoundBoard List')
      .setColor('#FF3131')
      .addFields(
        { name: 'Sound 1', value: '1', inline: true },
        { name: 'Sound 2', value: '2', inline: true },
        { name: 'Sound 3', value: '3', inline: true },
        { name: 'Sound 4', value: '4', inline: true },
        { name: 'Sound 5', value: '5', inline: true },
      )
    let chan = dc.channels.cache.get('807378069324038206') as TextChannel;
    chan.send(embed);
  }

  async join(member: GuildMember) {
    const chanId = member.voice.channelID;
    if (!chanId) return;
    const chan = dc.channels.cache.get(chanId) as VoiceChannel;
    this.conn = await chan.join();
  }

  async play(member: GuildMember) {
    if (!this.conn) {
      this.join(member);
    }

  }

  async leave() {
    if (this.conn) {
      this.conn.disconnect();
      this.conn = undefined;
    }
  }
}