import cli from 'cli-ux'
import {Command} from '@cli-engine/command'

export default class Bar extends Command {
  async run () {
    cli.log('running bar command')
  }
}
