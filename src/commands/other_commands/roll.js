module.exports = {
    name: 'roll',
    async execute(client, msg) {
        msg.channel.send(`${msg.author}` + ' rolled : ' + Math.round(Math.random() * 100) + '!')
    } 
}