const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "queue",
    description: "Show the current queue.",
    usage: `/queue [page]`,
    options: [
        {
            name: "page",
            description: "The page to show.",
            type: 4,
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `There is no queue to stop!` });
        let page = interaction.options.get("page")?.value || 1;
        const pageStart = 10 * (page - 1);
        const pageEnd = pageStart + 10;
        const tracks = queue.tracks.slice(pageStart, pageEnd).map((m, i) => {
            return `${i + pageStart + 1}. **[${m.title}](${m.url})**`;
        });

        const queueEmbed = new EmbedBuilder()
        .setColor(`Purple`)
        .setTitle(`${interaction.guild.name}'s Queue`)
        .setDescription(`${tracks.join("\n") || "No tracks in this page."}${
            queue.tracks.length > pageEnd
                ? `\n...${queue.tracks.length - pageEnd} more track(s)`
                : ''
        }`)
        .addFields(
            { name: `Now Playing`, value: `[${queue.current.title}](${queue.current.url})`, inline: true }
        )
        .setFooter({ text: `https://github.com/Skyy2K/MusicBot`, iconURL: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` })
        .setTimestamp();
        return interaction.followUp({ embeds: [queueEmbed] });
    }
};