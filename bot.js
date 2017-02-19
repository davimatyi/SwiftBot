const Discord = require("discord.js");
const api = require("./utils/API.js");
const client = new Discord.Client();
const cat = require("./handlers/cat.js");
const chuck = require("./handlers/chuck.js");
const config = require("./config.json");
//const swift = require("./handelers/swift.js");


client.on("message", msg => {
    if(!msg.content.startsWith(config.prefix) && msg.toString().length > 1) return;
    if(msg.author.bot) return;
    // Removes prefix
    let prefixLess = msg.content.substring(config.prefix.length);

    // Fun commands
    if(prefixLess === "cat") cat.sendRandomCat(msg);
    if(prefixLess.startsWith("ping")) msg.channel.sendMessage("pong!",{tts: true});
    if(prefixLess === "chuck") chuck.sendRandomChuck(msg);
    if(prefixLess.startsWith("suck")) msg.channel.sendMessage(prefixLess.substring(5)+" sucks!",{tts: true});
    //if(prefixLess.startsWith("swift")) swift.play(msg);
});

// Commands with different prefixes
client.on("message", msg => {
    if(msg.author.bot) return;
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