module.exports = {
    name: 'shuffle',
    description: 'shuffle',
    async execute(bot, msg, args) {
        const queue = bot.getQueue(msg)

        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.')

        if (!queue)
            return msg.channels.send('Nothing to skip.')

        await queue.shuffle();

        return msg.channel.send(`Queue shuffled **${queue.songs.length}** song(s) ! ✅`);
    }
}