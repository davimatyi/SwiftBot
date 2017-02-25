exports.findAuthorVoiceChannel = (msg) => findAuthorVoiceChannel(msg);

function findAuthorVoiceChannel(msg){
    return msg.guild.members.get(msg.author.id).voiceChannel;
}