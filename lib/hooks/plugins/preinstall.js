module.exports = ({config, plugin, tag}) => {
  if (plugin !== 'heroku-debug') {
    throw new Error('only plugins named heroku-debug are allowed.')
  }
}
