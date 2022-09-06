const logger = require("../../logger");

module.exports = (client, discord, distube) => {
    process.on("unhandledRejection", (error) => {
        // console.error(error);
        logger.botLogger.log("error", error.stack);
    });
};