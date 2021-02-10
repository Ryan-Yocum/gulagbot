"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("../../bot");
const checkPerms_1 = require("../../utils/checkPerms");
async function run(message, args) {
    let prefix = args.join(' ');
    if (!message.member)
        return;
    if (!checkPerms_1.checkAdmin(message.member)) {
        message.reply('You do not have sufficient permissions');
        return;
    }
    if (args.length == 0) {
        message.reply('No prefix was given');
        return;
    }
    bot_1.dc.state.set('prefix', prefix);
    message.reply('The prefix has been updated');
}
module.exports = {
    run
};
//# sourceMappingURL=prefix.js.map