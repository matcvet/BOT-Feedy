module.exports = {
    name: 'move',
    description: 'Move song in queue.',
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg);
        const trackPos = Number(args[0] - 1);
        const moveTo = Number(args[1] - 1);

        if (trackPos < 1 || trackPos > queue.songs.length - 1)
            return msg.channel.send('Cant move currently playing song, or out of bounds.');

        if (trackPos < 1 || trackPos > queue.songs.length - 1)
            return msg.channel.send('Cant move currently playing song, or out of bounds.');

        if (isNaN(trackPos) || isNaN(moveTo))
            return msg.channel.send('Invalid arguments');

        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

        if (!queue)
            return msg.channel.send('No song playing.');

        const track = queue.songs[trackPos];
        queue.songs.splice(trackPos, 1);
        queue.songs.splice(moveTo, 0, track);
        msg.channel.send(`Song moved to position.`);
        console.log(track);
    }
}