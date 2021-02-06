import { dc } from "../bot";

const event = 'ready';

async function run() {
  if (!dc.user) return;
  dc.user.setActivity('Commands', { type: 'LISTENING' });
}

module.exports = {
  event,
  run
}