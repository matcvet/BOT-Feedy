module.exports = {
    name: 'stop',
    description: 'Stop the queue.',
    async execute(bot, msg) {
        const queue = bot.getQueue(msg)

        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.')

        if (!queue)
            return msg.channels.send('Nothing to stop.')

        bot.stop(msg)

        return msg.channel.send('Queue stopped! ✅')
    }
}