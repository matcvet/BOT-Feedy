module.exports  = {
    name: 'zdr',
    description: 'Hello commands',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        msg.channel.send('Zdravo machor. 😉');   
    }
 
}