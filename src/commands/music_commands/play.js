module.exports = (bot, msg, args) => {

    if(args === '') 
        return msg.channel.send('Please enter a song name/link')

    if (!msg.member.voice.channel)
        return msg.channel.send('Ne si vo kanalot baki 😔.')

    bot.play(msg, args.join(' '));
}