const fetch = require("node-fetch");
const { WEATHER_TOKEN } = require("../../../config");

module.exports = {
    name: "weather",
    async execute(msg, args, Discord) {
        const cityName = args;
        if (cityName === undefined) {
            return msg.channel.send("Insert a valid city.");
        }

        if (!msg.member.voice.channel) {
            return msg.channel.send("You have to join a voice channel first. ❌ ");
        }

        // eslint-disable-next-line max-len
        if (msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) {
            return msg.channel.send("You must be in the same voice channel to use commands. ❌ ");
        }

        const getWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName
            }&appid=${WEATHER_TOKEN}&units=metric`;

        const initialize = (weatherAPI) => {
            const weatherEmbed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle(`Weather report: ${cityName}`)
                .setDescription(weatherAPI.weather[0].description)
                .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png")
                .addFields(
                    { name: "🌡 Temperature:", value: `${Math.round(weatherAPI.main.temp)} °C` },
                    { name: "☀ Feels like:", value: `${Math.round(weatherAPI.main.feels_like)} °C` },
                );
            msg.channel.send({ embeds: [weatherEmbed] });
        };

        fetch(getWeatherApi)
            .then((response) => response.json())
            .then((json) => {
                const weatherAPI = json;
                initialize(weatherAPI);
            })
            .catch((err) => console.log(err));
    },
};
