const { Client, Collection } = require("discord.js");
const { Player } = require("discord-player");

const client = new Client({ intents: ["Guilds", "GuildVoiceStates"] });
client.commands = new Collection();
client.player = new Player(client);

module.exports = client;

const config = require("./config");

require("./handler");

client.login(config.token);