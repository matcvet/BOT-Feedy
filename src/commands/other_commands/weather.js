const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
require('dotenv').config({ path: '../../.env' })

module.exports = (msg, arg) => {
    const cityName = arg
    if (cityName === undefined) {
        msg.channel.send('Enter a valid city name.')
        return
    }

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
        const exampleEmbed = new MessageEmbed()
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