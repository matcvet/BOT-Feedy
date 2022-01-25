module.exports = {
    name: 'help',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');
        
        const weatherEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help command')
        .addFields(
            { name: 'Random commands:', value: `\`help, doggo, roll, weather, zdr\`` },
            { name: 'Music commands:', value: `\`play, clear, queue, shuffle, skip, jump, seek, nowplaying, move\`` },
        )
        msg.channel.send({ embeds: [weatherEmbed] });
    }
}