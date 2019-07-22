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

        for (var i = 0 ; i < friendsData.length - 1 ; i++) {
            var compat = 0;
            var compScore = [];

            bestFriend = friendsData[i];
            console.log(bestFriend);
            
            for (var j = 0; j < friendsData[i].scores.length ; j++) {
                compScore.push(parseInt(friendsData[i].scores[j]));
            };
            console.log(compScore);

            for (var j = 0; j < newScores.length; j++) {
                compat += Math.abs(newScores[j] - compScore[j]);
            };
            console.log(compat);

            
        }
    });
}