const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'queue',
    alias: 'q',
    description: 'Show queue if available',
    async execute(bot, msg) {
        const queue = bot.getQueue(msg.guild.id);

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel. 😔.');

        if (!queue)
            return msg.channel.send('No queue available.');

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('Previous')
                    .setLabel('previous')
                    .setStyle('PRIMARY'),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('Next')
                    .setLabel('next')
                    .setStyle('PRIMARY'),
            )
        
        let currentPage = 0;

        const queueList = generateQueue(queue);

        const queueMessage = await msg.channel.send({ content: `**${queue.songs.length} songs in queue** \n ${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });

        const filter = button => button.customId === 'previous' && button.customId === 'next';
        const collector = queueMessage.createMessageComponentCollector(filter);

        collector.on('collect', async b => {
            if (b.customId === 'next') {
                if (currentPage < queueList.length - 1) {
                    currentPage += 1;
                    await b.update({ content: `${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });
                }
            } else if (b.customId === 'previous') {
                if (currentPage !== 0) {
                    currentPage -= 1;
                    await b.update({ content: `${queueList[currentPage]} \n **page: ${currentPage + 1}/${queueList.length}**`, components: [row] });
                }
            }
        })

        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }
}

const generateQueue = queue => {
    let chunks = []
    for (let i = 0; i < queue.songs.length; i += 10) {
        const chunk = queue.songs
            .map(
                (song, id) =>
                    `**${id ? id + 1 : 'Playing'}**. ${song.name} - \`${song.formattedDuration
                    }\``,
            )
            .slice(i, i + 10)
            .join('\n')
        chunks.push(chunk)
    }

    return chunks
}