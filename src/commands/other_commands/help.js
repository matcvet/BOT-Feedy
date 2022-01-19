module.exports = {
    name: 'help',
    async execute(client, msg) {
        if (!msg.member.voice.channel)
            return msg.channel.send('You must be in a voice channel to use commands.')

    msg.channel.send(`**Music commands:** \`play, clear, queue, shuffle, skip, jump, seek\`\n**Other commands:** \`help, doggo, roll, weather, zdr\``)
    }
}