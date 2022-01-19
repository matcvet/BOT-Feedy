module.exports  = {
    name: 'zdr',
    description: 'Hello commands',
    async execute(client, msg) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.');

        msg.channel.send('Zdravo machor. 😉');   
    }
 
}