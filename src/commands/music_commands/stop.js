module.exports = {
    name: 'stop',
    description: 'Stop the queue.',
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg)

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        if (!queue)
            return msg.channels.send('Nothing to stop.');

        bot.stop(msg)

        return msg.channel.send('Queue stopped! ✅');
    }
}