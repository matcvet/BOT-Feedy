module.exports = {
    name: 'roll',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You have to join a voice channel first. ❌ ");

        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id)
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");

        const maxRoll = Number(args[0]);

        if (isNaN(maxRoll))
            msg.channel.send(`${msg.author} rolled : ${getRandomNumber(1, 100)}!`);
        else
            msg.channel.send(`${msg.author} rolled : ${getRandomNumber(1, maxRoll)}!`);
    }
}

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}