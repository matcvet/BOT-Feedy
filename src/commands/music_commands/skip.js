module.exports = {
    name: 'skip',
    description: 'Skip the current song in queue',
    async execute(bot, msg) {
        const queue = bot.getQueue(msg);

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel. 😔.');

        if (!queue)
            return msg.channels.send('Nothing to skip.');

        if (!queue.autoplay && queue.songs.length <= 1) {
            bot.stop(msg);
            msg.channel.send('Skipped! ✅');
        }
        else {
            bot.skip(msg);
            msg.channel.send('Skipped! ✅');
        }
    }
}