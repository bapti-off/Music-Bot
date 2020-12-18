module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(c => c.category == 'Infos').map((c) => '`' + c.name + '`').join(', ');
            const music = message.client.commands.filter(c => c.category == 'Music').map((c) => '`' + c.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panneau d\'aide' },
                    footer: { text: '© 2020 - Opéra By El Foxy#9999' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'La musique', value: music },
                        { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                    ],
                    timestamp: new Date(),
                    description: `Pour utiliser des filtres, ${client.config.prefix}filter (Le filtre). Example : ${client.config.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(c => c.aliases && c.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Je n'ai pas trouvé cette commande!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panneau d\'aide' },
                    footer: { text: '© 2020 - Opéra By El Foxy#9999' },
                    fields: [
                        { name: 'Nom', value: command.name, inline: true },
                        { name: 'Catégorie', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'Aucun' : command.aliases.join('\n'), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Trouvez des informations sur la commande fournie. \n NArguments obligatoires `[]`, arguments facultatifs `<>`.',
                }
            });
        };
    },
};