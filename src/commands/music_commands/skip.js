module.exports = {
    name: 'skip',
    async execute(bot, msg) {
        const queue = bot.getQueue(msg)

        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.')

        if (!queue)
            return msg.channels.send('Nothing to skip.')

        if (!queue.autoplay && queue.songs.length <= 1) {
            bot.stop(msg)
            msg.channel.send('Skipped! ✅')
        }
        else {
            bot.skip(msg)
            msg.channel.send('Skipped! ✅')
        }
    }
}