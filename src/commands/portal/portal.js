let aliases = ['p']

async function run(dc, message, args) {
  const hook = dc.hooks.get('keeper');
  const portal = dc.channels.cache.get(dc.state.get('portal').portalId);
  const private = dc.channels.cache.get(dc.state.get('portal').privateId);
  const privateChat = dc.channels.cache.get(dc.state.get('portal').privateChatId);
  if (message.channel.id !== privateChat.id) return;
  if (args.join(' ') == 'open') {
    dc.state.get('portal').state = true;
    hook.send('The Portal has been opened');
    let mems = portal.members;
    mems.forEach(e => {
      e.voice.setChannel(private);
    });
  }
  else if (args.join(' ') == 'close') {
    dc.state.get('portal').state = false;
    hook.send('The Portal has been closed');
  }
}

module.exports = {
  run,
  aliases
}