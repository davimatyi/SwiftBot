var Discord = require("discord.js");
var APIs = require("./utils/API.js");
var client = new Discord.Client();


client.on("message", msg => {
    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!",{tts: true});
    }
});

client.on("ready", () => {
    console.log("I am ready!");
});

client.login(APIs.token);