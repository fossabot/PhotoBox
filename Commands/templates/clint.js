const { PhotoCommand } = require('photobox')
const { Util } = require('photobox-core')

module.exports = class Clint extends PhotoCommand {
  get name() { return 'clint' }

  get helpMeta() { return {
    category: 'Image Manipulation',
    description: 'Uh...',
    usage: '[url]',
    credit: {
      name: "Blargbot By Ratismal/stupid cat",
      url: "https://github.com/Ratismal/blargbot"
    }
  } }
}