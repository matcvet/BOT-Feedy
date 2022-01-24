module.exports = (client, Discord, distube, queue, song) => {
    queue.textChannel.send(`**Added** ${song.name} - \`${song.formattedDuration}\``).then(msg => {
        setTimeout(() => msg.delete(), 30000);
    })
};

