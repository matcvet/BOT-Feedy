const { Client } = require('discord.js')
const DisTube = require('distube')
const { SpotifyPlugin } = require("@distube/spotify")
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES'
    ]
});
// Create a new DisTube
const distube = new DisTube.default(client, {
    searchSongs: 1,
    searchCooldown: 1,
    leaveOnEmpty: true,
    emptyCooldown: 30,
    leaveOnFinish: false,
    leaveOnStop: false,
    plugins: [new SpotifyPlugin()],
    updateYouTubeDL: false
})

//All the commands the bot has
const play = require("./music_commands/play")
const queue = require("./music_commands/queue")
const skip = require("./music_commands/skip")
const stop = require('./music_commands/stop')
const shuffle = require('./music_commands/shuffle')
const animal = require('./other_commands/animals')
const roll = require('./other_commands/roll')
const weather = require('./other_commands/weather')
const zdr = require('./other_commands/zdr')
const help = require('./other_commands/help')
const getMessage = require('../message');
const jump = require('./music_commands/jump');

//Events for when a command is given for music
distube
    .on("playSong", (queue, song) => queue.textChannel.send(
        `**Now Playing** \`${song.name}\` - \`${song.formattedDuration}\`\n`
    ).then(msg => {
        setTimeout(() => msg.delete(), 10000)
    }).catch(console.error))
    .on("addList", (queue, playlist) => queue.textChannel.send(`Added \`${playlist.name}\` playlist to the queue!`))
    .on("addSong", (queue, song) => queue.textChannel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue. **${queue.songs.length} songs in queue.**`
    ))
    .on("empty", queue => queue.textChannel.send("Channel is empty. Leaving the channel"))

module.exports = msg => {

    const message = JSON.parse(getMessage(msg))
    if (msg.content.startsWith(message.prefix)) {
        if (message.commandName == 'play' || message.commandName == 'p')
            play(distube, msg, message.argument)
        else if (message.commandName == 'skip')
            skip(distube, msg)
        else if (message.commandName == 'queue' || message.commandName == 'q')
            queue(distube, msg)
        else if (message.commandName == 'stop')
            stop(distube, msg)
        else if (message.commandName == 'shuffle')
            shuffle(distube, msg)
        else if (message.commandName == 'help')
            help(msg)
        else if (message.commandName == 'doggo')
            animal(msg)
        else if (message.commandName == 'roll')
            roll(msg)
        else if (message.commandName == 'weather')
            weather(msg, message.argument)
        else if (message.commandName == 'zdr')
            zdr(msg)
        else if (message.commandName == 'jump')
            jump(distube, msg, message.argument)
    }
}