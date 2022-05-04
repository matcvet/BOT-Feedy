module.exports = {
    name: "roulette",
    alias: "rlt",
    description: "randomly kicks a user thats in the voice channel",
    async execute(msg, args, Discord, bot) {

        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        await msg.guild.members.fetch()
            .then(fetchedMembers => {
                const filteredMembers = fetchedMembers.filter(m => msg.member.voice.channel === m.voice.channel);
                let index = Math.floor(Math.random() * filteredMembers.size);
                let cntr = 0;
                for (let key of filteredMembers.keys()) {
                    if (cntr++ === index) {
                        filteredMembers.get(key).voice.disconnect();
                    }
                }
            })
            .catch(err => console.log(err));
    }
}

