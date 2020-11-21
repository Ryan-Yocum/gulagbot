let event = 'voiceStateUpdate';
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');

async function run(dc, oldState, newState) {
  if (newState.id != dc.state.get('jason')) return;
  const conn = await newState.channel.join();
  let dir = path.join(__dirname, '..', '..', 'static', 'jason');
  let files = await fsp.readdir(dir);
  let file = files[Math.floor(Math.random() * files.length)]
  conn.play(fs.createReadStream(path.join(dir, file)), { volume: 0.5 });
  setTimeout(() => {
    conn.disconnect();
  }, 10000);
}


module.exports = {
  event,
  run
}