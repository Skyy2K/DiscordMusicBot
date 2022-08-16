const client = require("../index");
const logger = require("../util/logger");

client.on("ready", () => {
    logger.info(`Successfully logged into ${client.user.tag}!`);
    logger.info(`Servers: ${client.guilds.cache.size.toLocaleString()}`)
    logger.info(`Users: ${client.users.cache.size.toLocaleString()}`);
    logger.info(`Thanks for using Skyy's Music Bot!`)
});