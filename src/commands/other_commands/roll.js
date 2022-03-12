module.exports = {
    name: 'roll',
    async execute(msg, args, Discord, bot) {
        if (!msg.member.voice.channel)
            return msg.channel.send('Youre not in the channel 😔');

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