const {createLogger, transports, format} = require("winston");

const botLogger = createLogger({
    transports: [
        new transports.File({
            format: format.combine(format.timestamp(), format.json()),
            filename: "./logs/bot-errors.log", 
            level: "error",

        }),
        new transports.File({
            format: format.combine(format.timestamp(), format.json()),
            filename: "./logs/bot-info.log", 
            level: "info",
        }),
    ],
});

module.exports = { botLogger };