module.exports = {
    name: 'np',
    description: 'Send a message for the current playing song.',
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg);
        
        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        if (!queue)
            return msg.channel.send('No song playing.');

        const currentSong = queue.songs[0];

        msg.channel.send(`**Now playing:** \`${currentSong.name} - ${currentSong.formattedDuration}\``)
    }
}