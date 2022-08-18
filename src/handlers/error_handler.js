const { ERR_CHANNEL_ID } = require("../../config");

module.exports = (client, discord, distube) => {

    const errChannel = ERR_CHANNEL_ID;

    process.on("unhandledRejection", (reason) => {
        console.error(reason);

        const errEmbed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("⚠ ERROR")
            .setDescription("```" + reason + "``` ");

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] });
    });

    process.on("uncaughtException", (e) => {
        console.error(e);
    });
};