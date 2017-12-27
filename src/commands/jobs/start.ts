import { Command } from '@cli-engine/command'
import cli from 'cli-ux'

export default class JobsStart extends Command {
  async run() {
    cli.log('starting job... done')
  }
}
