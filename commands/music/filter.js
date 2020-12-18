module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Veuillez spécifier un filtre valide pour activer ou désactiver!`);

        const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ce filtre n'existe pas!`);

        const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

        const queueFilters = client.player.getQueue(message).filters;
        const filtersUpdated = {};
        filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterRealName]) message.channel.send(`${client.emotes.music} - J'ajoute ** le filtre à la musique, veuillez patienter ... Remarque: plus la musique est longue, plus cela prendra de temps.`);
        else message.channel.send(`${client.emotes.music} - Je ** désactive ** le filtre sur la musique, veuillez patienter ... Remarque: plus la lecture de la musique est longue, plus cela prendra de temps.`);
    },
};