const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "help",
    description: "Get a list of commands.",
    usage: `/help [command]`,
    options: [
        {
            name: "command",
            description: "The command to get help for.",
            type: 3,
            required: false,
        },
    ],
    run: async (client, interaction) => {
        const command = interaction.options.get("command")?.value;
        if (command) {
            const cmd = client.commands.get(command);
            if (!cmd) return interaction.followUp({ content: `Invalid command!` });
            const commandEmbed = new EmbedBuilder()
            .setColor(`Aqua`)
            .setTitle(`${cmd.name}`)
            .addFields(
                { name: `Description`, value: `${cmd.description ?? "None"}`, inline: true },
                { name: `Usage`, value: `${cmd.usage ?? `/${cmd.name}`}`, inline: true },
            )
            .setFooter({ text: `https://github.com/Skyy2K/MusicBot`, iconURL: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` })
            .setTimestamp();
            return interaction.followUp({ embeds: [commandEmbed] });
        }
        const commands = client.commands.map((cmd) => `**${cmd.name}** - ${cmd.description}`);
        const helpEmbed = new EmbedBuilder()
        .setColor(`Aqua`)
        .setTitle(`${client.user.tag}'s Commands`)
        .setDescription(`${commands.join("\n")}`)
        .setFooter({ text: `https://github.com/Skyy2K/MusicBot`, iconURL: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` })
        .setTimestamp();
        return interaction.followUp({ embeds: [helpEmbed] });
    }
};