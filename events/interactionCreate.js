const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false });

        const cmd = client.commands.get(interaction.commandName);
        if (!cmd) return interaction.followUp({ content: `Invalid command!` });

        cmd.run(client, interaction);
    }
});