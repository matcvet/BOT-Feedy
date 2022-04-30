module.exports = {
    name: 'resume',
    description: 'resume song/playlist',
    execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);

        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        if (!queue)
            return msg.channel.send("Bot is currently not playing. ❌ ");

        if (queue.playing)
            return msg.channel.send('Music already playing.');

        bot.resume(queue);

        msg.channel.send("Music resumed ✅");
    }
}