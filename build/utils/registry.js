"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHooks = exports.registerEvents = exports.registerCommands = void 0;
const bot_1 = require("../bot");
const fsp = require('fs').promises;
const path = require('path');
async function registerCommands(dir = '../commands') {
    let files = await fsp.readdir(path.join(__dirname, dir));
    files.forEach(async (file) => {
        let stat = await fsp.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
            registerCommands(path.join(dir, file));
        }
        else {
            if (file.endsWith('.js')) {
                let commandName = file.substring(0, file.indexOf('.js'));
                let commandModule = require(path.join(__dirname, dir, file));
                bot_1.dc.commands.set(commandName, commandModule);
                if (typeof commandModule.aliases !== 'undefined') {
                    commandModule.aliases.forEach(async (alias) => {
                        bot_1.dc.commands.set(alias, commandModule);
                    });
                }
            }
        }
    });
}
exports.registerCommands = registerCommands;
async function registerEvents(dir = '../events') {
    let files = await fsp.readdir(path.join(__dirname, dir));
    files.forEach(async (file) => {
        let stat = await fsp.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
            registerEvents(path.join(dir, file));
        }
        else {
            if (file.endsWith('.js')) {
                let eventModule = require(path.join(__dirname, dir, file));
                let eventName = eventModule.event;
                bot_1.dc.on(eventName, eventModule.run);
            }
        }
    });
}
exports.registerEvents = registerEvents;
async function registerHooks(dir = '../webhooks') {
    let files = await fsp.readdir(path.join(__dirname, dir));
    files.forEach(async (file) => {
        let stat = await fsp.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
            registerHooks(path.join(dir, file));
        }
        else {
            if (file.endsWith('.js')) {
                let hookName = file.substring(0, file.indexOf('.js'));
                let hookModule = require(path.join(__dirname, dir, file));
                bot_1.dc.hooks.set(hookName, hookModule);
            }
        }
    });
}
exports.registerHooks = registerHooks;
//# sourceMappingURL=registry.js.map