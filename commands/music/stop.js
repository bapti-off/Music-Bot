module.exports = {
    name: 'stop',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success} - La musique ** s'est arrêtée ** sur ce serveur!`);
    },
};