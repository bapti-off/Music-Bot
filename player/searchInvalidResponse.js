module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send(`${client.emotes.error} - Tu dois envoyer un numéro valide entre ** 1 ** et **${tracks.length}** !`);
};