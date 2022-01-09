module.exports = msg => {
    msg.channel.send(`${msg.author}` + ' rolled : ' + Math.round(Math.random() * 100) + '!')
}