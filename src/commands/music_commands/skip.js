module.exports = {
    name: "skip",
    description: "Skip the current song in queue",
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg);

        if (!msg.member.voice.channel) {
            return msg.channel.send("You have to join a voice channel first. ❌ ");
        }

        // eslint-disable-next-line max-len
        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
        }

        if (!queue) {
            return msg.channel.send("Bot is currently not playing. ❌ ");
        }

        if (!queue.autoplay && queue.songs.length <= 1) {
            bot.stop(msg);
            return msg.channel.send("Skipped! ✅");
        }

        bot.skip(msg);
        msg.channel.send("Skipped! ✅");
    },
};
