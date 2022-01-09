module.exports = async (bot, msg, args) => {
    const queue = bot.getQueue(msg)

    if (!msg.member.voice.channel)
        return msg.channel.send('You must be in a voice channel to use commands.')

    if (!queue)
        return msg.channels.send('Nothing to skip.')

    await queue.shuffle();

    return msg.channel.send(`Queue shuffled **${queue.songs.length}** song(s) ! ✅`);
}