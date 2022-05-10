module.exports = async (client, Discord, distube, queue, playlist) => queue.textChannel.send(
    `Added \`${playlist.name}\` playlist to the queue!`,
);
