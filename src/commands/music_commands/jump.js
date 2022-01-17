module.exports = {
    name: 'jump',
    description: 'Jump to song with index number',
    async execute(bot, msg, args) {
        const queue = bot.getQueue(msg.guild.id)
        const index = parseInt(args[0])

        if (index === undefined || isNaN(index))
            return msg.channel.send('Pusti brojce, ne se srami.')

        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.')

        if (queue.songs.length >= 2 && index <= queue.songs.length)
            bot.jump(msg, index - 1)
        else
            return msg.channel.send('Nema nisto tamu, zalam.')
    }
}