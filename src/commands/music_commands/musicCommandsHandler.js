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
    searchCooldown: 30,
    leaveOnEmpty: true,
    emptyCooldown: 30,
    leaveOnFinish: false,
    leaveOnStop: false,
    plugins: [new SpotifyPlugin()]
})

const play = require("./play")
const queue = require("./queue")
const skip = require("./skip")
const getMessage = require("../../message")
const stop = require('./stopQueue')
const shuffle = require('./shuffle')
const help = require('./help')

//Events for when a command is given for music
distube
    .on("playSong", (queue, song) => queue.textChannel.send(
        `**Now Playing** \`${song.name}\` - \`${song.formattedDuration}\`\n`
    ))
    .on("addList", (queue, playlist) => queue.textChannel.send(
        // playlist.songs.length doesn't appear to work :c 
        `Added \`${playlist.name}\` playlist to the queue!`
    ))
    .on("addSong", (queue, song) => queue.textChannel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue.`
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
        else if (message.commandName == 'clear')
            stop(distube, msg)
        else if (message.commandName == 'shuffle')
            shuffle(distube, msg)
        else if (message.commandName == 'help')
            help(msg)
    }
}