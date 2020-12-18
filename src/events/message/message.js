let event = 'message';

async function run(dc, message) {
  if (!message.content.startsWith(dc.state.get('prefix'))) return;
  if (message.author.bot) return;
  let args = message.content.substring(dc.state.get('prefix').length, message.content.length).split(' ');
  let command = args.shift();
  if (dc.commands.has(command)) {
    dc.commands.get(command).run(dc, message, args);
  }
  else {
    message.reply('That command does not exist');
  }
}



module.exports = {
  event,
  run
};