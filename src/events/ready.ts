import { DiscordClient } from "../classes/Client";

const event = 'ready';

async function run(dc: DiscordClient) {
  if (!dc.user) return;
  dc.user.setActivity('Commands', { type: 'LISTENING' });
}

module.exports = {
  event,
  run
}