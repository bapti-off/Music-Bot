module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Tu n'as pas fourni de réponse valide ... Veuillez renvoyer la commande!`);
};