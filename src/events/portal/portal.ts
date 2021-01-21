import { VoiceState } from "discord.js";
import { DiscordClient } from "../../classes/Client";

let event = 'voiceStateUpdate';

async function run(dc: DiscordClient, _oldState: VoiceState, newState: VoiceState) {
  const portal = dc.channels.cache.get(dc.state.get('portal').portalId);
  const privateChan = dc.channels.cache.get(dc.state.get('portal').privateId);
  if (!portal) return;
  if (newState.channelID != portal.id) return;
  if (!dc.state.get('portal').state) return;
  if (typeof privateChan === 'undefined') return;
  newState.setChannel(privateChan);
}

module.exports = {
  event,
  run
}