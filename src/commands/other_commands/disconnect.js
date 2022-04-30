module.exports = {
    name: "disconnect",
    alias: "dc",
    dscription: "disconnect the bot",
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        await msg.guild.members.fetch(bot.client.user.id)
            .then(user => {
                if (!user.voice.channel) {
                    msg.channel.send("Bot is currently not playing. ❌");
                } else {
                    user.voice.disconnect()
                    msg.channel.send("Bot disconnected. ✅");
                }
            })
            .catch(console.error)

    }
}