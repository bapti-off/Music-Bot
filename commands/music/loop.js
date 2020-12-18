module.exports = {
    name: 'loop',
    aliases: ['lp'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`${client.emotes.success} - Mode de répétition ** désactivé **!`);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`${client.emotes.success} - Mode de répétition ** activé **!`);
        };
    },
};