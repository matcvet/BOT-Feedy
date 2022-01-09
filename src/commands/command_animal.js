const { readdirSync } = require('fs')

module.exports = msg => {
    const imageDirPath = "C:/Users/cveta/Documents/Projects/Javascript Projects/discordjs-bot-feedy/animals/"
    let pictures = readdirSync(imageDirPath);
    const num = (Math.floor(Math.random() * pictures.length) + 1)
    msg.channel.send({ files: [imageDirPath + pictures[num]] })
}