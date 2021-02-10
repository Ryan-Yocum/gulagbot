"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("../../bot");
let aliases = ['sb'];
async function run(message, args) {
    if (!message.member)
        return;
    if (args[0] === 'setup') {
        bot_1.sb.setup(message.member);
        return;
    }
    if (!message.member.voice.channelID) {
        message.reply('You must be in a voice channel to use that command');
        return;
    }
    switch (args[0]) {
        case 'join':
            if (bot_1.sb.conn) {
                message.reply('I am already in a voice channel!');
                return;
            }
            bot_1.sb.join(message.member);
            break;
        case 'leave':
            bot_1.sb.leave();
            break;
        case 'stop':
            if (!bot_1.sb.disp) {
                message.reply('There is nothing playing');
            }
            bot_1.sb.stop();
            break;
    }
}
module.exports = {
    aliases,
    run
};
//# sourceMappingURL=soundboard.js.map