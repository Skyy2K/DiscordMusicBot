module.exports = {
    name: "ping",
    description: "Pong!",
    run: async (client, interaction) => {
        return interaction.followUp({ content: `:ping_pong: Pong!` });
    }
};