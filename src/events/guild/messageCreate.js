const { PREFIX } = require("../../../config");

module.exports = async (client, Discord, distube, message) => {
    const prefix = PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find((a) => a.alias === cmd);
    if (command) {
        command.execute(message, args, Discord, distube);
        setTimeout(() => message.delete(), 30000);
    }
};
