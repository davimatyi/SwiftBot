var request = require("request");


exports.sendRandomCat = (msg) => randomCat(msg);

function randomCat(msg){
    var url = "http://aws.random.cat/meow";
    request(url, function (error, response, body){
        if(!error && response.statusCode == 200){
            msg.channel.sendMessage(JSON.parse(body).file+"");
        }
    });
}