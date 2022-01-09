const { Client } = require('discord.js')
require('dotenv').config({ path: '../.env' })
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES',
    ]
});
const commandHandler = require('./commands/commandsHandler')

//Taking in a message from user
client.on('messageCreate', commandHandler)

require('dotenv').config();
const token = process.env.BOT_TOKEN

//ready message for bot
client.on('ready', () => {
    console.log("I am ready and online.")
    client.user.setPresence({
        activities: [{ name: '..help' }]
    });
})

//Acquiring the bot password
client.login(token)