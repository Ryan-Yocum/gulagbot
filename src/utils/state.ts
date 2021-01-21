import { DiscordClient } from "../classes/Client";

export async function setState(dc: DiscordClient) {
  dc.state.set('guildId', '692792802009939971');
  dc.state.set('prefix', '..');
  dc.state.set('portal', {
    state: false,
    portalId: '772261353070002197',
    privateId: '755580046541848646',
    privateChatId: '757316444102066197'
  });
}