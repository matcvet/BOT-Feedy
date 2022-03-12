module.exports = {
    name: 'greet',
    description: 'greet command',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        msg.channel.send('Hello there. 😉');
    }

}