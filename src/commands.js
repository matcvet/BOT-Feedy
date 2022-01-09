const animal = require('./commands/command_animal')
const roll = require('./commands/command_roll')
const weather = require('./commands/command_weather')
const zdr = require('./commands/command_zdr')
const getMessage = require('./message')

module.exports = msg => {

    const message = JSON.parse(getMessage(msg))
    const arg = message.argument[0]
    const command = message.commandName
    if (msg.content.startsWith(message.prefix)) {
        switch (command) {
            case 'zdr':
                zdr(msg)
                break
            case 'roll':
                roll(msg)
                break
            case 'dog':
                animal(msg)
                break
            case 'weather':
                weather(msg, arg)
                break
            default:
                msg.channel.send("No valid command given.")
                break
        }
    }
}