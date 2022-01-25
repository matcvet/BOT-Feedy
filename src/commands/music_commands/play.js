module.exports = {
    name: 'play',
    alias: 'p',
    description: 'play song/playlist',
    execute(msg, args, Discord, bot) {
        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands.");

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');
        
        if (args === '')
            return msg.channel.send('Please enter a song name/link');
            
        bot.play(msg, args.join(' '));
    }
}