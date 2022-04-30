module.exports = {
    name: 'seek',
    description: 'forward given songs in seconds.',
    execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);
        const seconds = Number(args[0]);

        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        if (!queue)
            return msg.channel.send("Bot is currently not playing. ❌ ");

        if (isNaN(seconds))
            return msg.channel.send('Enter seconds to seek to.');



        const skipTo = formatTime(seconds);
        bot.seek(msg, seconds);
        msg.channel.send(`Seeked to \`${skipTo} / ${queue.songs[0].formattedDuration}\` ✅`);
    }
}

const formatTime = seconds => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return [
        h,
        m > 9 ? m : (h ? '0' + m : m || '0'),
        s > 9 ? s : '0' + s
    ].filter(Boolean).join(':');
}