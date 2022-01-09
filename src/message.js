module.exports = msg => {
    const PREFIX = "..";
    const [CMD_NAME, ...args] = msg.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)

    return JSON.stringify({ prefix: PREFIX, commandName: CMD_NAME, argument: args })
}