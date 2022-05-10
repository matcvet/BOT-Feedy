const { MessageActionRow, MessageButton } = require("discord.js");

const generateQueue = (queue) => {
    const chunks = [];

    for (let i = 0; i <= queue.songs.length; i += 10) {
        const chunk = queue.songs
            .map((song, id) => `**${id || "Playing"}**. ${song.name} - \`${song.formattedDuration}\``)
            .slice(i, i + 10)
            .join("\n");
        chunks.push(chunk);
    }

    return chunks;
};

module.exports = {
    name: "queue",
    alias: "q",
    description: "Show queue if available",
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);

        if (!msg.member.voice.channel) {
            return msg.channel.send("You have to join a voice channel first. ❌ ");
        }

        // eslint-disable-next-line max-len
        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
        }

        if (!queue) {
            return msg.channel.send("Bot is currently not playing. ❌ ");
        }

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("toFirst")
                    .setLabel("⏪")
                    .setStyle("PRIMARY"),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId("previous")
                    .setLabel("⏮")
                    .setStyle("PRIMARY"),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId("next")
                    .setLabel("⏭")
                    .setStyle("PRIMARY"),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId("toLast")
                    .setLabel("⏩")
                    .setStyle("PRIMARY"),
            );

        let currentPage = 0;

        const queueList = generateQueue(queue);

        const queueMessage = await msg.channel.send({ content: `**${queue.songs.length - 1} songs in queue** \n ${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });

        const filter = (button) => button.customId === "previous" && button.customId === "next";
        const collector = queueMessage.createMessageComponentCollector(filter);

        collector.on("collect", async (b) => {
            if (b.customId === "next") {
                if (currentPage < queueList.length - 1) {
                    currentPage += 1;
                    await b.update({ content: `**${queue.songs.length - 1} songs in queue** \n ${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });
                }
            } else if (b.customId === "previous") {
                if (currentPage !== 0) {
                    currentPage -= 1;
                    await b.update({ content: `**${queue.songs.length - 1} songs in queue** \n ${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });
                }
            } else if (b.customId === "toLast") {
                if (currentPage < queueList.length - 1) {
                    currentPage = queueList.length - 1;
                    await b.update({ content: `**${queue.songs.length - 1} songs in queue** \n ${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });
                }
            } else if (b.customId === "toFirst") {
                if (currentPage !== 0) {
                    currentPage = 0;
                    await b.update({ content: `**${queue.songs.length - 1} songs in queue** \n ${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });
                }
            }
        });

        collector.on("end", (collected) => console.log(`Collected ${collected.size} items`));
    },
};
