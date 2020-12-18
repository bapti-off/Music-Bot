module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas en vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le vocal où je suis !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
            if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
        });

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: '© 2020 - Opéra By El Foxy#9999' },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Demandé par', value: track.requestedBy.username, inline: true },
                    { name: 'De la playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Vues', value: track.views, inline: true },
                    { name: 'durée', value: track.duration, inline: true },
                    { name: 'Filtres activés', value: filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Mode répétition', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Actuellement en pause', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Barre de progression', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};