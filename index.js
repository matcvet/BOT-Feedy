const Discord = require("discord.js");

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_VOICE_STATES",
        "GUILD_MEMBERS",
    ],
});

// Create a new DisTube instance
const DisTube = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { BOT_TOKEN, CLIENT_ID_SPOTIFY, CLIENT_SECRET_SPOTIFY, PREFIX } = require("./config");

const distube = new DisTube.default(client, {
    searchSongs: 1,
    searchCooldown: 1,
    youtubeDL: false,
    leaveOnFinish: false,
    leaveOnStop: false,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin({
        parallel: true,
        emitEventsAfterFetching: false,
        api: {
            clientId: CLIENT_ID_SPOTIFY,
            clientSecret: CLIENT_SECRET_SPOTIFY,
        },
    })],
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
    require(`./src/handlers/${handler}`)(client, Discord, distube);
});

// Acquiring the bot password
client.login(BOT_TOKEN).then(() => {
    // client.user is now defined
    client.user.setPresence({
        activities: [{ name: `${PREFIX}help` }],
    });
});
