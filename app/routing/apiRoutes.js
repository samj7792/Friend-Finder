var friendsData = require ("../data/friends");



//Routes

module.exports = function(app) {
    
    app.get("/api/friends", function(req,res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req,res) {

        var newFriend = req.body;

        friendsData.push(newFriend);
        res.json(true);

        var newScores = [];
        
        for (var i = 0 ; i < newFriend.scores.length ; i++) {
            newScores.push(parseInt(newFriend.scores[i]));
        }

        console.log(newScores);

        var bestFriend = {name: "", scores: []};
        var compat = 99;

        for (var i = 0 ; i < friendsData.length - 1 ; i++) {
            var compScore = [];
            var nextCompat = 0;

            console.log(friendsData[i]);
            
            for (var j = 0; j < friendsData[i].scores.length ; j++) {
                compScore.push(parseInt(friendsData[i].scores[j]));
            };
            console.log(compScore);
            
            for (var k = 0; k < newScores.length; k++) {
                nextCompat += Math.abs(newScores[k] - compScore[k]);
            };
            console.log(nextCompat);
            
            if (compat > nextCompat) {
                compat = nextCompat;
                bestFriend = friendsData[i];
            }
            
            console.log("Best: " + bestFriend.name);

            
        }
    });
}