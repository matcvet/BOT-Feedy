module.exports = {
    name: 'help',
    async execute(client, msg) {
        if (!msg.member.voice.channel)
        return msg.channel.send('You must be in a voice channel to use commands.')

    msg.channel.send(`**music commands:** \`play, clear, queue, shuffle, skip, jump\`\n**other commands:** \`help, doggo, roll, weather, zdr\``)
    }
}