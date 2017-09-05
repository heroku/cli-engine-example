const {Command} = require('cli-engine-command')

class Bar extends Command {
  async run () {
    this.out.log('running bar command')
  }
}

module.exports = Bar
