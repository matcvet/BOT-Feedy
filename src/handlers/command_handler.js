const fs = require("fs");

module.exports = (client) => {
    const loadDir = (dirs) => {
        const commandFiles = fs.readdirSync(`./src/commands/${dirs}`).filter((file) => file.endsWith(".js"));
        commandFiles.forEach((file) => {
            const command = require(`../commands/${dirs}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
            } else {
                console.log("[WARNING] Failed to set a command in commands collection.");
            }
        });
    };

    ["music_commands", "other_commands"].forEach((f) => loadDir(f));
};
