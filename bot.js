var Discord = require("discord.js");
var api = require("./utils/API.js");
var client = new Discord.Client();
var cat = require("./utils/cat.js");


client.on("message", msg => {
    let prefix = "$";
    if(!msg.content.startsWith(prefix)&& msg.toString().length > 1) return;
    let prefixLess = msg.content.substring(prefix.length);

    if(prefixLess.startsWith("ping")) msg.channel.sendMessage("pong!",{tss:true});
    if(prefixLess.startsWith("cat")) cat.sendRandomCat(msg);
});

client.on("ready", () => {
    console.log("I have succsessfuly logged in as: " + client.user.username);
});

client.login(api.token);