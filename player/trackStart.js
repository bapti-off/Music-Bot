module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Lecture en cours ${track.title} dans ${message.member.voice.channel.name} ...`);
};