var request = require("request");


exports.sendRandomCat = (msg) => randomCat(msg);

function randomCat(msg){
    var url = "http://random.cat/meow";
    request(url, function (error, response, body){
        if(!error && response.statusCode == 200){
            console.log(body);
            msg.channel.sendMessage(JSON.parse(body).file+"");
        }
    });
}