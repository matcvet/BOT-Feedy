const { readdirSync } = require('fs')

module.exports = {
    name: 'doggo',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');
        const imageDirPath = "C:/Users/cveta/Documents/Projects/Javascript Projects/bot-feedy/animals/"
        let pictures = readdirSync(imageDirPath);
        const num = (Math.floor(Math.random() * pictures.length) + 1)
        msg.channel.send({ files: [imageDirPath + pictures[num]] })
    }
}