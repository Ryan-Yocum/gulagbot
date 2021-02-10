"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sb = exports.dc = void 0;
const Client_1 = require("./classes/Client");
const SoundBoard_1 = require("./classes/SoundBoard");
const registry_1 = require("./utils/registry");
const state_1 = require("./utils/state");
if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();
exports.dc = new Client_1.DiscordClient();
exports.sb = new SoundBoard_1.SoundBoard();
state_1.setState();
registry_1.registerEvents();
registry_1.registerCommands();
registry_1.registerHooks();
exports.dc.login(process.env.BOT_TOKEN);
//# sourceMappingURL=bot.js.map