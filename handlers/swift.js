const utils = require("../utils/Utils.js");

exports.play = (msg) => play(msg);

function play(msg){
    if(utils.findAuthorVoiceChannel(msg) === undefined){
        msg.channel.sendMessage("Please join a voice channel before running this command!");
        return;
    }

    utils.findAuthorVoiceChannel(msg).join()
        .then(connection => {
            const dispatcher = connection.playFile("./audio/shakeitoff.mp3");
            dispatcher.on("error", err => {
                console.log(err);
            });
            dispatcher.on("end", reason => {
                //console.log(reaso1n);
                msg.member.voiceChannel.leave();
            });
            //console.log(true);
        });
}