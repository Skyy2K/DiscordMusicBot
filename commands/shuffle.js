module.exports = {
    name: "shuffle",
    description: "Shuffle the queue!",
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `There is no queue to stop!` });
        if (queue.tracks.length === 0) return interaction.followUp({ content: `There is only one track in the queue!` });
        await queue.shuffle();
        return interaction.followUp({ content: `:white_check_mark: Queue shuffled!` });
    }
};