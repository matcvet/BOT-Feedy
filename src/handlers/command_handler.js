const fs = require('fs');

module.exports = (client, Discord) => {
    const loadDir = dirs => {
        const commandFiles = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${dirs}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
            } else {
                continue;
            }
        }
    }
    ['music_commands', 'other_commands'].forEach(f => loadDir(f));
}