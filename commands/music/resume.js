module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musique joue déjà!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Chanson ${client.player.getQueue(message).playing.title} **a repris** !`);
    },
};