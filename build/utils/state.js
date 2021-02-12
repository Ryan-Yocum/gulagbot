"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = void 0;
const bot_1 = require("../bot");
async function setState() {
    bot_1.dc.state.set('guildId', '692792802009939971');
    bot_1.dc.state.set('prefix', '..');
    bot_1.dc.state.set('portal', {
        state: false,
        portalId: '772261353070002197',
        privateId: '755580046541848646',
        privateChatId: '757316444102066197'
    });
    bot_1.dc.state.set('dungon', '757316444102066197');
}
exports.setState = setState;
//# sourceMappingURL=state.js.map