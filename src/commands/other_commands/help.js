module.exports = {
    name: "help",
    async execute(msg, args, Discord) {
        const weatherEmbed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Help command")
            .addFields(
                { name: "Other commands:", value: "`help, roll, weather, greet, roulette :), disconnect`" },
                { name: "Music commands:", value: "`play, clear, queue, shuffle, skip, jump, seek, nowplaying, move, resume, pause`" },
            );
        msg.channel.send({ embeds: [weatherEmbed] });
    },
};
