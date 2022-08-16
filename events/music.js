const { EmbedBuilder } = require("discord.js");
const client = require("..");

client.player.on("trackStart", (queue, track) => {
    const trackEmbed = new EmbedBuilder()
    .setTitle(`Now Playing`)
    .setThumbnail(track.thumbnail)
    .setDescription(`[${track.title}](${track.url})`)
    .setColor(`Purple`)
    .setFooter({ text: `https://github.com/Skyy2K/MusicBot`, iconURL: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` })
    .setTimestamp();
    queue.metadata.send({ embeds: [trackEmbed] });
});

client.player.on("trackAdd", (queue, track) => {
    const trackEmbed = new EmbedBuilder()
    .setTitle(`Added to Queue`)
    .setThumbnail(track.thumbnail)
    .setDescription(`[${track.title}](${track.url})`)
    .setColor(`Purple`)
    .setFooter({ text: `https://github.com/Skyy2K/MusicBot`, iconURL: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` })
    .setTimestamp();
    queue.metadata.send({ embeds: [trackEmbed] });
});