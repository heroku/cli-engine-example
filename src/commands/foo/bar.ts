import { Command } from '@cli-engine/command'
import cli from 'cli-ux'

export default class Bar extends Command {
  async run() {
    cli.log('running bar command')
  }
}
