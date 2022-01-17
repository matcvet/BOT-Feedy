module.exports = (client, Discord, distube, message) => {
    
    const prefix = '..';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.alias && a.alias.includes(cmd));
    if(command) command.execute(distube, message, args, Discord);
}