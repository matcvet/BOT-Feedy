module.exports = {
    name: "pause",
    description: "pause song/playlist",
    execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);

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

        if (queue.paused) {
            return msg.channel.send("Music already paused. ❌");
        }

        bot.pause(queue);

        msg.channel.send("Music paused ✅");
    },
};
