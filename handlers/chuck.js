var request = require("request");


exports.sendRandomChuck = (msg) => randomChuck(msg);

function randomChuck(msg){
    var url = "http://api.icndb.com/jokes/random";
    request(url, function (error, response, body){
        if(!error && response.statusCode == 200){
            var json = JSON.parse(body);
            if(json.type === "success") msg.channel.sendMessage(json.value.joke+"");
        }
    });
}