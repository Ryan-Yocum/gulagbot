const fsp = require('fs').promises;
const path = require('path');

async function registerCommands(dc, dir = '../commands') {
  let files = await fsp.readdir(path.join(__dirname, dir));
  files.forEach(async file => {
    let stat = await fsp.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerCommands(dc, path.join(dir, file));
    }
    else {
      if (file.endsWith('.js')) {
        let commandName = file.substring(0, file.indexOf('.js'));
        let commandModule = require(path.join(__dirname, dir, file));
        dc.commands.set(commandName, commandModule);
        if (typeof commandModule.aliases !== 'undefined') {
          commandModule.aliases.forEach(async alias => {
            dc.commands.set(alias, commandModule);
          });
        }
      }
    }
  });
}

async function registerEvents(dc, dir = '../events') {
  let files = await fsp.readdir(path.join(__dirname, dir));
  files.forEach(async file => {
    let stat = await fsp.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerEvents(dc, path.join(dir, file));
    }
    else {
      if (file.endsWith('.js')) {
        let eventModule = require(path.join(__dirname, dir, file));
        let eventName = eventModule.event;
        dc.on(eventName, eventModule.run.bind(null, dc));
      }
    }
  });
}

async function registerHooks(dc, dir = '../webhooks') {
  let files = await fsp.readdir(path.join(__dirname, dir));
  files.forEach(async file => {
    let stat = await fsp.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerHooks(dc, path.join(dir, file));
    }
    else {
      if (file.endsWith('.js')) {
        let hookName = file.substring(0, file.indexOf('.js'));
        let hookModule = require(path.join(__dirname, dir, file));
        dc.hooks.set(hookName, hookModule);
      }
    }
  });
}

module.exports = {
  registerCommands,
  registerEvents,
  registerHooks
}