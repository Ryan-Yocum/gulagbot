import { Client, Collection, WebhookClient } from "discord.js";
import { Command } from "../interfaces/Command";

export class DiscordClient extends Client {
  public commands: Collection<string, Command>;
  public state: Collection<string, any>;
  public hooks: Collection<string, WebhookClient>;
  constructor() {
    super();
    this.commands = new Collection();
    this.state = new Collection();
    this.hooks = new Collection();
  }
}