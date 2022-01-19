module.exports = {
    name: 'shuffle',
    description: 'shuffle the song queue',
    async execute(bot, msg, args) {
        const queue = bot.getQueue(msg)

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel. 😔.');

        if (!queue)
            return msg.channels.send('Nothing to skip.')

        await queue.shuffle();

        return msg.channel.send(`Queue shuffled **${queue.songs.length}** song(s) ! ✅`);
    }
}