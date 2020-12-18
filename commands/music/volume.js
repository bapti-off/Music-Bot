module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        if (!args[0] || isNaN(args[0])) return message.channel.send(`${client.emotes.error} - S'il te plait, entrez un nombre valide!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Veuillez saisir un nombre valide (entre 1 et 100) !`);

        client.player.setVolume(message, args[0]);

        message.channel.send(`${client.emotes.success} - Volume réglé sur **${parseInt(args[0])}%** !`);
    },
};