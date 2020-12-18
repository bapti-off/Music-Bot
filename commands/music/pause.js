module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musique est déjà en pause !`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Chanson ${client.player.getQueue(message).playing.title} **mis en pause** !`);
    },
};