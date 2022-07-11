const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

module.exports = {
    name: "roll",
    async execute(msg, args) {
        if (!msg.member.voice.channel) {
            return msg.channel.send("You have to join a voice channel first. ❌ ");
        }

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
        }

        const maxRoll = Number(args[0]);

        if (Number.isNaN(maxRoll)) {
            msg.channel.send(`${msg.author} rolled : ${getRandomNumber(1, 100)}!`);
        } else {
            msg.channel.send(`${msg.author} rolled : ${getRandomNumber(1, maxRoll)}!`);
        }
    },
};
