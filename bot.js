const Discord = require("discord.js");
const client = new Discord.Client();
const cat = require("./handlers/cat.js");
const chuck = require("./handlers/chuck.js");
const config = require("./config.json");
const swift = require("./handlers/swift.js");


client.on("message", msg => {
    if(!msg.content.startsWith(config.prefix) && msg.toString().length > 1) return;
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    // Removes prefix
    let prefixLess = msg.content.substring(config.prefix.length);
    // Fun commands
    if(prefixLess === "cat") cat.sendRandomCat(msg);
    if(prefixLess.startsWith("ping")) msg.channel.sendMessage("pong!",{tts: true});
    if(prefixLess === "chuck") chuck.sendRandomChuck(msg);
    if(prefixLess.startsWith("suck")) msg.channel.sendMessage(prefixLess.substring(5)+" sucks!",{tts: true});
    if(prefixLess.startsWith("swift")) swift.play(msg);
    if(msg.author.id === "174786282793205760"){
        msg.channel.sendMessage("megöllek", {tts: true});
    }
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
    client.user.setActivity("Shake It Off", {url: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD?si=LfYE_osiT7K8_7HI0yYj3A",type: "LISTENING"});
});

client.login(config.token);
