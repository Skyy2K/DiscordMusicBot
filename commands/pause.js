module.exports = {
    name: "pause",
    description: "Pause the player!",
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `There is no queue to stop!` });
        const paused = queue.setPaused(true);
        return interaction.followUp({ content: `${paused ? ":white_check_mark: Paused!" : ":x: Unable to pause."}` });
    }
};