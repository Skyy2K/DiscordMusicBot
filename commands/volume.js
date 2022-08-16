const config = require("../config");

module.exports = {
    name: "volume",
    description: "Get or set the volume of the server queue.",
    usage: `/volume [amount]`,
    options: [
        {
            name: "amount",
            description: "The amount to set the volume to.",
            type: 4,
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: `There is no queue to stop!` });
        let amount = interaction.options.get("amount")?.value;
        if (!amount) return interaction.followUp({ content: `🎧 The current queue volume is **${queue.volume}**.` });
        if (amount > config.music.maxVolume) return interaction.followUp({ content: `The volume can't be higher than ${config.music.maxVolume}!` });
        if (amount < 0) return interaction.followUp({ content: `The volume can't be lower than 0!` });
        const success = queue.setVolume(amount);
        return interaction.followUp({ content: `${success ? `:white_check_mark: Volume set to **${amount}**!` : ":x: Unable to set the volume."}` });
    }
};