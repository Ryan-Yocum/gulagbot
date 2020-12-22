const Discord = require('discord.js');
let aliases = ['p']

async function run(dc, message, args) {
  const portal = dc.channels.cache.get(dc.state.get('portal').portalId);
  const private = dc.channels.cache.get(dc.state.get('portal').privateId);
  const privateChat = dc.channels.cache.get(dc.state.get('portal').privateChatId);
  if (!message.member.permissionsIn(privateChat).has(1024)) {
    message.reply('You do not have permission to use that command.');
    return;
  }
  if (args.join(' ') == 'open') {
    dc.state.get('portal').state = true;
    const msg = new Discord.MessageEmbed()
      .addField('New Message Embed', 'This is a test');
    message.reply(msg);
    let mems = portal.members;
    mems.forEach(e => {
      e.voice.setChannel(private);
    });
  }
  else if (args.join(' ') == 'close') {
    dc.state.get('portal').state = false;
    message.reply('The Portal has been closed');
  }
}

module.exports = {
  run,
  aliases
}