const fetch = require('node-fetch');
require('dotenv').config({ path: '../../.env' })

module.exports = {
    name: 'weather',
    async execute(client, msg, arg, Discord) {
        const cityName = arg
        if (cityName === undefined) {
            msg.channel.send('Vnesi validen grad.')
            return
        }
        if (!msg.member.voice.channel)
            return msg.channel.send('Ne si vo kanalot baki 😔.');

        const getWeatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
            '&appid=' + process.env.WEATHER_TOKEN + '&units=metric'
        fetch(getWeatherApi)
            .then(response => response.json())
            .then(json => {
                let weatherAPI = json
                initialize(weatherAPI)
            })
            .catch(err => console.log(err))

        const initialize = (weatherAPI) => {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Weather report: ' + cityName)
                .setDescription(weatherAPI.weather[0].description)
                .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png')
                .addFields(
                    { name: '🌡 Temperature:', value: Math.round(weatherAPI.main.temp) + ' °C' },
                    { name: '☀ Feels like:', value: Math.round(weatherAPI.main.feels_like) + ' °C' },
                )
            msg.channel.send({ embeds: [exampleEmbed] });
        }
    }
}