module.exports = async (bot, msg, args) => {
    const queue = bot.getQueue(msg)

    if (!msg.member.voice.channel)
        return msg.channel.send('You must be in a voice channel to use commands.')

    if(!queue)
        return msg.channels.send('Nothing to skip.')

    if(queue.songs.length >= 5) {
        await queue.shuffle();
    } else return msg.channel.send(`Need more than 5 songs to shuffle`)

    return msg.channel.send(`Queue shuffled **${queue.songs.length}** song(s) ! ✅`);
}