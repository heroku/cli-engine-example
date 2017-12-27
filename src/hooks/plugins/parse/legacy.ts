import { Hook, IHooks } from '@cli-engine/engine/lib/hooks'

function getID(c: any): string {
  let id = []
  if (c.topic) id.push(c.topic)
  if (c.command) id.push(c.command)
  return id.join(':')
}

export default class PluginsParseTestHook extends Hook<'plugins:parse'> {
  async run(opts: IHooks['plugins:parse']) {
    const m = opts.module
    m.commands = m.commands.map((c: any) => {
      if (!c.id) c.id = getID(c)
      return c
    })
  }
}
