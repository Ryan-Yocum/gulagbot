const ytdl = require('ytdl-core-discord');

async function run(dc, message, args) {
  let channel = message.member.voice.channel;
  let disp;
  let conn;
  if (!channel) {
    message.reply('You are not in a voice channel');
    return;
  }

  if (args[0] == 'play') {
    if (args[1].includes('youtu')) {
      conn = await channel.join();
      play(conn, args[1]);
    }
    else {
      message.reply('Not a valid youtube url');
      return;
    };
  }

  else if (args[0] == 'stop') {
    if (disp) {
      disp.destroy();
      disp = null;
    }
    else {
      message.reply('Nothing was playing');
    }
  }

  else if (args[0] == 'vol') {
    if (disp) {
      disp.setVolume(args[1]);
    }
    else {
      message.reply('Nothing was playing');
    }
  }
  else {
    message.reply('Nothing was entered');
  }

}

async function play(connection, url) {
  disp = connection.play(await ytdl(url), { type: 'opus', volume: 0.5 });
}

module.exports = {
  run
}