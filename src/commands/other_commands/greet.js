module.exports = {
    name: 'greet',
    description: 'greet command',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        msg.channel.send('Hello there. 😉');
    }

}