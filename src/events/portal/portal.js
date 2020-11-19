let event = 'voiceStateUpdate';

async function run(dc, oldState, newState) {
  const portal = dc.channels.cache.get(dc.state.get('portal').portalId);
  const private = dc.channels.cache.get(dc.state.get('portal').privateId);
  if (newState.channelID != portal.id) return;
  if (!dc.state.get('portal').state) return;
  newState.setChannel(private);
}

module.exports = {
  event,
  run
}