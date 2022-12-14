module.exports = {
    name: "clear",
    description: "Clear the queue.",
    async execute(msg, args, Discord, bot) {
        try {
            const queue = bot.getQueue(msg);

            if (!msg.member.voice.channel) {
                return msg.channel.send("You have to join a voice channel first. ❌ ");
            }
    
            if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
                return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
            }
    
            if (!queue) {
                return msg.channel.send("Bot is currently not playing. ❌ ");
            }
    
            bot.stop(msg);
            
            msg.channel.send("Queue cleared! ✅");
        } catch(err) {
            console.error(err);
        }
    },
};
