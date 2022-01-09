module.exports = (bot, msg, args) => {

    if(args === '') 
        return msg.channel.send('Please enter a song name/link')

    if (!msg.member.voice.channel)
        return msg.channel.send('You must be in a voice channel to use commands.')

    bot.play(msg, args.join(' '));
}