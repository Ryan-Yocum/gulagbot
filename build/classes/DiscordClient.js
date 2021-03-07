"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordClient = void 0;
const discord_js_1 = require("discord.js");
class DiscordClient extends discord_js_1.Client {
    constructor() {
        super();
        this.commands = new discord_js_1.Collection();
        this.state = new discord_js_1.Collection();
        this.hooks = new discord_js_1.Collection();
    }
}
exports.DiscordClient = DiscordClient;
//# sourceMappingURL=DiscordClient.js.map