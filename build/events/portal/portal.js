"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("../../bot");
let event = 'voiceStateUpdate';
async function run(_oldState, newState) {
    const portal = bot_1.dc.channels.cache.get(bot_1.dc.state.get('portal').portalId);
    const privateChan = bot_1.dc.channels.cache.get(bot_1.dc.state.get('portal').privateId);
    if (!portal)
        return;
    if (newState.channelID != portal.id)
        return;
    if (!bot_1.dc.state.get('portal').state)
        return;
    if (typeof privateChan === 'undefined')
        return;
    newState.setChannel(privateChan);
}
module.exports = {
    event,
    run
};
//# sourceMappingURL=portal.js.map