module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours de lecture sur ce serveur!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Tes connecté dans aucun salons vocal!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Je ne peux pas rejoindre votre chaîne vocale, veuillez vérifier mes autorisations!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Une erreur s'est produite ... Erreur : ${error}`);
    };
};
