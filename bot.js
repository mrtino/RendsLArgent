var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = ["Rends l'argent @FrancoisFillon !", "Rends l'argent @laurentwauquiez !", "Rends l'argent @MLP_officiel !", "Rends l'argent @alainjuppe !", "Rends l'argent @EmmanuelMacron !", "Rends l'argent Patrick Balkany !", "Rends l'argent Jérôme Cahuzac !", "Rends l'argent @BrunoLeRoux !", "Rends l'argent @NicolasSarkozy !", "Rends l'argent @s_dassault !", "Rends l'argent @jnguerini !", "Rends l'argent @ericwoerth !"];
var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[Math.floor(Math.random() * messages.length)]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

writeTweet()

setInterval(writeTweet, 30000);
