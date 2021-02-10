"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDungon = exports.checkAdmin = exports.checkOwner = void 0;
const bot_1 = require("../bot");
function checkOwner(member) {
    return (member.guild.ownerID === member.id) ? true : false;
}
exports.checkOwner = checkOwner;
function checkAdmin(member) {
    return member.hasPermission(8);
}
exports.checkAdmin = checkAdmin;
function checkDungon(member) {
    const chanId = bot_1.dc.state.get('dungon');
    if (!bot_1.dc.channels.cache.has(chanId))
        return;
    const chan = bot_1.dc.channels.cache.get(chanId);
    return member.permissionsIn(chan).has(2048);
}
exports.checkDungon = checkDungon;
//# sourceMappingURL=checkPerms.js.map