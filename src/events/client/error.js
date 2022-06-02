module.exports = (channel, error) => {
    channel.send("An error occured, call Matea");
    console.log(error);
};
