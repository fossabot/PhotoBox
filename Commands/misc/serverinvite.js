const { Command } = require('photobox')
const { Util } = require('photobox-core')

module.exports = class ServerInvite extends Command {
  get name() { return 'serverinvite' }
  get aliases() { return ['🗄'] }
  get cooldown() { return 0 }

  exec(message, args) {
    message.channel.send('https://join.photobox.pw')
  }

  get helpMeta() { return {
    category: 'General',
    description: 'Gets the server invite link.'
  } }
}