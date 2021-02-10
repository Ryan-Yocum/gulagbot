import { GuildMember, MessageEmbed, StreamDispatcher, TextChannel, VoiceChannel, VoiceConnection } from "discord.js";
import { createReadStream } from "fs";
import { dc } from "../bot";
import { Field, Sound } from "../interfaces/Sound";
import { checkAdmin } from "../utils/checkPerms";

export class SoundBoard {
  public conn: VoiceConnection | undefined;
  public disp: StreamDispatcher | undefined;
  public msgID: string | undefined;
  async setup(member: GuildMember) {
    dc.emojis.cache.forEach(e => {
      if (e.name == 'one') {
        console.log(e);
      }
    })
    if (!checkAdmin(member)) return;
    const sounds = require('../static/soundboard/sounds').default;
    let fields: Field[] = [];
    sounds.forEach((sound: Sound) => {
      fields.push({
        name: sound.name,
        value: sound.value,
        inline: true
      })
    });
    const embed = new MessageEmbed()
      .setTitle('SoundBoard List')
      .setColor('#FF3131')
      .addFields(fields)
      .setThumbnail('https://cdn.dribbble.com/users/1614722/screenshots/4419914/soundboard_animatie__zwart__still_2x.gif')
      .setFooter('Click a reaction button to play a clip or ❌ to leave');
    let chan = dc.channels.cache.get('807378069324038206') as TextChannel;
    let msg = await chan.send(embed);
    this.msgID = msg.id;
    sounds.forEach((sound: Sound) => {
      msg.react(sound.value);
    });
    msg.react('❌');
  }

  async join(member: GuildMember) {
    const chanId = member.voice.channelID;
    if (!chanId) return;
    const chan = dc.channels.cache.get(chanId) as VoiceChannel;
    this.conn = await chan.join();
    this.conn.on('disconnect', () => {
      this.conn = undefined;
    })
  }

  async play(member: GuildMember, sound: string) {
    if (!this.conn) {
      await this.join(member);
    }
    this.disp = this.conn?.play(createReadStream(sound), { volume: 0.5 });
    if (!this.disp) return;
    this.disp.on('finish', () => {
      this.disp?.destroy();
      this.disp = undefined;
    });
  }

  async stop() {
    this.disp?.pause();
  }

  async leave() {
    if (this.conn) {
      this.conn.disconnect();
      this.conn = undefined;
    }
  }
}