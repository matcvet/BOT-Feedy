const { readdirSync } = require('fs')

module.exports = {
    name: 'doggo',
    async execute(client, msg) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.');
        const imageDirPath = "C:/Users/cveta/Documents/Projects/Javascript Projects/bot-feedy/animals/"
        let pictures = readdirSync(imageDirPath);
        const num = (Math.floor(Math.random() * pictures.length) + 1)
        msg.channel.send({ files: [imageDirPath + pictures[num]] })
    }
}