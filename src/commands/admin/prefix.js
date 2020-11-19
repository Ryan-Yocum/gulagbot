async function run(dc, message, args) {
  let prefix = args.join(' ');
  if (!message.member.hasPermission(32)) {
    message.reply('You do not have sufficient permissions');
    return;
  }
  if (args.length == 0) {
    message.reply('No prefix was given')
    return;
  }
  dc.state.set('prefix', prefix);
  message.reply('The prefix has been updated');
}

module.exports = {
  run
}