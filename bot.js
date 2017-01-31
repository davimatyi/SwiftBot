var Discord = require("discord.js");
const api = require("./utils/API.js");
var client = new Discord.Client();
const cat = require("./handlers/cat.js");
const chuck = require("./handlers/chuck.js");


client.on("message", msg => {
    let prefix = "!";
    if(!msg.content.startsWith(prefix)&& msg.toString().length > 1) return;
    let prefixLess = msg.content.substring(prefix.length);

    //Func commands
    if(prefixLess === "cat") cat.sendRandomCat(msg);
    if(prefixLess.startsWith("ping")) msg.channel.sendMessage("pong!",{tts: true});
    if(prefixLess.startsWith("chuck")) chuck.sendRandomChuck(msg);
    if(prefixLess.startsWith("suck")) msg.channel.sendMessage(prefixLess.substring(5)+" sucks!",{tts: true});
});

//Commands with different prefixes
client.on("message", msg => {
    if(msg.content.startsWith("$cat")){
        for (var i = 0; i < 8; i++) {
            cat.sendRandomCat(msg);
       }
    }
});

client.on("ready", () => {
    console.log("I have succsessfuly logged in as: " + client.user.username);
    client.user.setGame("Shake It OFF");
    client.user.setAFK(true);
});

client.login(api.token);