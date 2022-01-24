module.exports = async (client, Discord, distube, queue, song) => queue.textChannel.send(
    `**Now playing** \`${song.name}\` - \`${song.formattedDuration}\`\n`
).then(msg => {
    setTimeout(() => msg.delete(), 30000);
});