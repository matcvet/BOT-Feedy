module.exports = {
    name: "play",
    alias: "p",
    description: "play song/playlist",
    execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel) {
            return msg.channel.send("You have to join a voice channel first. ❌ ");
        }

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
        }

        if (!args[0]) {
            return msg.channel.send("Please enter a valid song name/link. ❌");
        }

        bot.play(msg.member.voice.channel, args.join(" "), {
            msg,
            textChannel: msg.channel,
            member: msg.member,
        });
    },
};
