const Discord = require('discord.js');
require('dotenv').config({ path: '../.env' });
const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES',
    ]
});

// Create a new DisTube instance
const DisTube = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
const distube = new DisTube.default(client, {
    searchSongs: 1,
    searchCooldown: 1,
    plugins: [new SpotifyPlugin()],
    updateYouTubeDL: false,
    leaveOnFinish: false,
    leaveOnStop: false
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord, distube);
})

require('dotenv').config();
const token = process.env.BOT_TOKEN;

//Acquiring the bot password
client.login(token).then(() => {
    // client.user is now defined
    client.user.setPresence({
        activities: [{ name: '..help' }]
    });
});