module.exports = {
    name: "remove",
    description: "Remove a track from the queue.",
    usage: `/remove [index]`,
    options: [
        {
            name: "index",
            description: "The index of the track to remove.",
            type: 4,
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `There is no queue to stop!` });
        const index = interaction.options.get("index")?.value;
        const trackIndex = index - 1;
        const trackName = queue.tracks[trackIndex]?.title;
        if (!trackName) return interaction.followUp({ content: `:x: Unable to find track with index **${index}**.` });
        queue.remove(trackIndex);
        return interaction.followUp({ content: `:white_check_mark: Track **${trackName}** removed!` });
    }
};