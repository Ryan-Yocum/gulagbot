"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("../../bot");
const checkPerms_1 = require("../../utils/checkPerms");
let aliases = ['p'];
async function run(message, args) {
    const portal = bot_1.dc.channels.cache.get(bot_1.dc.state.get('portal').portalId);
    const privateChan = bot_1.dc.channels.cache.get(bot_1.dc.state.get('portal').privateId);
    if (!message.member)
        return;
    if (!portal)
        return;
    if (!checkPerms_1.checkDungon(message.member)) {
        message.reply('You do not have permission to use that command.');
        return;
    }
    if (args.join(' ') == 'open') {
        bot_1.dc.state.get('portal').state = true;
        message.reply('The Portal has been opened');
        let mems = portal.members;
        mems.forEach(e => {
            e.voice.setChannel(privateChan);
        });
    }
    else if (args.join(' ') == 'close') {
        bot_1.dc.state.get('portal').state = false;
        message.reply('The Portal has been closed');
    }
    else {
        message.reply('You must specify open or close');
    }
}
module.exports = {
    run,
    aliases
};
//# sourceMappingURL=portal.js.map