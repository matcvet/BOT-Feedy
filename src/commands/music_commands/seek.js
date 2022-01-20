module.exports = {
    name: 'seek',
    description: 'forward given songs in seconds.',
    execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);
        const seconds = Number(args[0]);

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        if (!queue)
            return msg.channel.send('No song playing.');

        if(isNaN(seconds))
            return msg.channel.send('Enter seconds to seek to.');
            
        const skipTo = formatTime(seconds);
        bot.seek(msg, seconds);
        msg.channel.send(`Seeked to \`${skipTo} / ${queue.songs[0].formattedDuration}\``);
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