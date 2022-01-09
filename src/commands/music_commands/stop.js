module.exports = async (bot, msg) => {
    const queue = bot.getQueue(msg)

    if (!msg.member.voice.channel)
        return msg.channel.send('You must be in a voice channel to use commands.')

    if(!queue)
        return msg.channels.send('Nothing to stop.')

    bot.stop(msg)

    return msg.channel.send('Queue stopped! ✅')
}