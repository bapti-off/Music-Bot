module.exports = (client, message, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} a été ajouté à la file d'attente (**${playlist.items.length}** Chansons) !`);
};