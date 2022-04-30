module.exports = {
    name: 'shuffle',
    description: 'shuffle the song queue',
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg)

        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        if (!queue)
            return msg.channel.send("Bot is currently not playing. ❌ ");

        await queue.shuffle();

        return msg.channel.send(`Queue shuffled **${queue.songs.length}** song(s) ! ✅`);
    }
}