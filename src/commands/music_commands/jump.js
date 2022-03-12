module.exports = {
    name: 'jump',
    description: 'Jump to song in queue',
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);
        const index = parseInt(args[0]);

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands.");

        if (index === undefined || isNaN(index))
            return msg.channel.send('Enter a number of a song to jump to in queue.');



        if (queue.songs.length >= 2 && index <= queue.songs.length)
            bot.jump(msg, index - 1);
        else
            return msg.channel.send('Out of bounds.');
    }
}