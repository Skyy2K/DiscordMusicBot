module.exports = {
    name: "skip",
    description: "Skip to the next song in the queue.",
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `:x: There is no queue to stop!` });
        if (queue.tracks.length === 0) return interaction.followUp({ content: `:x: There is only one track in the queue!` });
        const success = queue.skip();
        return interaction.followUp({ content: `${success ? ":white_check_mark: Skipped!" : ":x: Unable to skip."}` });
    }
};