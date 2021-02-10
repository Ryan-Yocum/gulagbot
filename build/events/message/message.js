"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("../../bot");
let event = 'message';
async function run(message) {
    if (!message.content.startsWith(bot_1.dc.state.get('prefix')))
        return;
    if (message.author.bot)
        return;
    let args = message.content.substring(bot_1.dc.state.get('prefix').length, message.content.length).split(' ');
    let command = args.shift();
    if (!command)
        return;
    if (bot_1.dc.commands.has(command)) {
        bot_1.dc.commands.get(command)?.run(message, args);
    }
    else {
        message.reply('That command does not exist');
    }
}
module.exports = {
    event,
    run
};
//# sourceMappingURL=message.js.map