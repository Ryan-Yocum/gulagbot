export interface Command {
  run: Function,
  aliases: string[]
}