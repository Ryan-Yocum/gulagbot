import { GuildMember, MessageEmbed, TextChannel, VoiceChannel, VoiceConnection } from "discord.js";
import { dc } from "../bot";
import { checkAdmin } from "../utils/checkPerms";

export class SoundBoard {
  public conn: VoiceConnection | undefined;
  public msgID: string | undefined;
  async setup(member: GuildMember) {
    dc.emojis.cache.forEach(e => {
      if (e.name == 'one') {
        console.log(e);
      }
    })
    if (!checkAdmin(member)) return;
    const embed = new MessageEmbed()
      .setTitle('SoundBoard List')
      .setColor('#FF3131')
      .addFields(
        { name: 'Sound 1', value: '1️⃣', inline: true },
        { name: 'Sound 2', value: '2️⃣', inline: true },
        { name: 'Sound 3', value: '3️⃣', inline: true },
        { name: 'Sound 4', value: '4️⃣', inline: true },
        { name: 'Sound 5', value: '5️⃣', inline: true },
        { name: 'Sound 6', value: '6️⃣', inline: true },
      )
      .setThumbnail('https://cdn.discordapp.com/icons/692792802009939971/bc52c23c6ba77925828634ba3b7ddc98.png')
      .setFooter('Use `./sb play "number" to play a clip.`')
    let chan = dc.channels.cache.get('807378069324038206') as TextChannel;
    let msg = await chan.send(embed);
    this.msgID = msg.id;
    msg.react('1️⃣');
    msg.react('2️⃣');
    msg.react('3️⃣');
    msg.react('4️⃣');
    msg.react('5️⃣');
    msg.react('6️⃣');
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