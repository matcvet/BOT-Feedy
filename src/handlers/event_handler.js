const fs = require('fs');

module.exports = (client, Discord, distube) => {
    const loadDir = dirs => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for(const file of eventFiles) {
            const event = require(`../events/${dirs}/${file}`);
            const eventName = file.split('.')[0];
            client.on(eventName, event.bind(null, client, Discord, distube));
            distube.on(eventName, event.bind(null, client, Discord, distube));
        }
    }

    ['client', 'guild', 'music'].forEach(e => loadDir(e));
}