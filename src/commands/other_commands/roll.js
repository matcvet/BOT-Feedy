module.exports = {
    name: 'roll',
    async execute(client, msg) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.');
        
            msg.channel.send(`${msg.author}` + ' rolled : ' + Math.round(Math.random() * 100) + '!');
    } 
}