module.exports = {
    name: "resume",
    description: "Resume the player!",
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `There is no queue to resume!` });
        const resumed = queue.setPaused(false);
        return interaction.followUp({ content: `${resumed ? ":white_check_mark: Resumed!" : ":x: Unable to resume."}` });
    }
};