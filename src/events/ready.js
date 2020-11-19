let event = 'ready';

async function run(dc) {
  dc.user.setActivity('Commands', { type: 'LISTENING' });
}

module.exports = {
  event,
  run
}