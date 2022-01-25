module.exports = {
    name: 'clear',
    description: 'Clear the queue.',
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg);

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands.");

        if (!queue)
            return msg.channels.send('Nothing to clear.');

        bot.stop(msg);

        return msg.channel.send('Queue cleared! ✅');
    }
}