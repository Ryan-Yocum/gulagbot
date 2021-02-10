"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const bot_1 = require("../../bot");
const sounds_1 = __importDefault(require("../../static/soundboard/sounds"));
let event = 'messageReactionAdd';
async function run(messageReaction, user) {
    if (messageReaction.message.id !== bot_1.sb.msgID)
        return;
    if (user.bot)
        return;
    messageReaction.users.remove(user);
    let sound = sounds_1.default.find(s => {
        return s.value === messageReaction.emoji.name;
    });
    let guild = bot_1.dc.guilds.cache.get(bot_1.dc.state.get('guildId'));
    let member = guild.members.cache.get(user.id);
    if (!member.voice.channelID)
        return;
    let fileName = sound?.file;
    let file = path_1.default.join(__dirname, '../../static/soundboard/clips', fileName);
    bot_1.sb.play(member, file);
}
module.exports = {
    event,
    run
};
//# sourceMappingURL=soundboard.js.map