const { Command } = require('photobox')
const { Util } = require('photobox-core')
const sf = require('snekfetch')
const is = require("buffer-image-size")

module.exports = class Wanted extends Command {
  get name() { return 'wanted' }

  async exec(message, args) {
    let user = message.author
    if(message.mentions.users.size >= 1) user = message.mentions.users.array()[0]
    message.channel.startTyping()
    try {
      let buffer = await this.sendToProcess(message, { code: 'wanted', avatar: user.displayAvatarURL({ size: 1024, format: 'png' }), username: user.username })
      message.channel.send({ files: [{ attachment: buffer, name: 'wanted.png' }] })
    } catch (e) {
      Util.sendError(message, e)
    } finally {
      message.channel.stopTyping()
    }
  }

  get permissions() { return ['attach'] }

  get helpMeta() { return {
    category: 'Image Manipulation',
    description: 'On the run.',
    usage: '[@mention]'
  } }
}