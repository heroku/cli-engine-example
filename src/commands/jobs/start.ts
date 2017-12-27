import { Command } from '@cli-engine/command'
import cli from 'cli-ux'

export default class JobsStart extends Command {
  static description = 'this is the command description'
  static aliases = ['start', 'newjob']
  static args = [{ name: 'job', required: true }]
  static help = `
this is some example help text
`

  async run() {
    cli.log(`starting job: ${this.args.job}... done`)
  }
}
