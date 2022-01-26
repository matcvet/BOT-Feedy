const Discord = require('discord.js');
require('dotenv').config({ path: '../.env' });
const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES',
    ]
});

let spotifyOptions = {
    parallel: true,
    emitEventsAfterFetching: true,
    api: {
        clientId: process.env.CLIENT_ID_SPOTIFY,
        clientSecret: process.env.CLIENT_SECRET_SPOTIFY,
    }
};

// Create a new DisTube instance
const DisTube = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
const distube = new DisTube.default(client, {
    searchSongs: 1,
    searchCooldown: 1,
    plugins: [new SpotifyPlugin(spotifyOptions)],
    updateYouTubeDL: false,
    leaveOnFinish: false,
    leaveOnStop: false,
    emitAddSongWhenCreatingQueue: false,
    emitAddSongWhenCreatingQueue: false
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord, distube);
});

require('dotenv').config();
const token = process.env.BOT_TOKEN;

//Acquiring the bot password
client.login(token).then(() => {
    // client.user is now defined
    client.user.setPresence({
        activities: [{ name: '..help' }]
    });
});