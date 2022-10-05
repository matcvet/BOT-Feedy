module.exports = {
    name: "jump",
    description: "Jump to song in queue",
    async execute(msg, args, Discord, bot) {
        const queue = bot.getQueue(msg.guild.id);
        const index = parseInt(args[0], 10);

        if (!msg.member.voice.channel) {
            return msg.channel.send("You have to join a voice channel first. ❌ ");
        }

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
        }

        if (!queue) {
            return msg.channel.send("Bot is currently not playing. ❌ ");
        }

        if (index === undefined || Number.isNaN(index)) {
            return msg.channel.send("Please enter a song number in queue. ❌");
        }

        if (queue.songs.length >= 2 && index <= queue.songs.length) {
            bot.jump(msg, index - 1);
        } else {
            return msg.channel.send("Out of bounds. ❌");
        }

        msg.channel.send(`Jumped to song ${args} in queue! ✅`);
    },
};
