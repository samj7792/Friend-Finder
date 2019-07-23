var friendsData = require ("../data/friends");


module.exports = function(app) {
    
    //Routes

    app.get("/api/friends", function(req,res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req,res) {

        
        var newFriend = req.body;
        
        friendsData.push(newFriend);
        //res.json(true);
        
        var newScores = [];
        
        // turns user scores into integers rather than strings
        for (var i = 0 ; i < newFriend.scores.length ; i++) {
            newScores.push(parseInt(newFriend.scores[i]));
        }
        
        console.log("------New Entry------");
        console.log(newFriend);
        console.log("------Current Users------");
        
        var bestFriend = {name: "", scores: []};
        var compat = 99;

        bestMatch();

        res.json(bestFriend);

        function bestMatch() {// find best friend
            // loop through each in friendsArray except user's input
            for (var i = 0 ; i < friendsData.length - 1 ; i++) {
                var compScore = [];
                var nextCompat = 0;

                console.log(friendsData[i]);
                
                // convert friendsData[i].score into integers
                for (var j = 0; j < friendsData[i].scores.length ; j++) {
                    compScore.push(parseInt(friendsData[i].scores[j]));
                };
                //console.log(compScore);
                
                // calculate compatibility
                for (var k = 0; k < newScores.length; k++) {
                    nextCompat += Math.abs(newScores[k] - compScore[k]);
                };
                //console.log(nextCompat);
                
                // save lowest compatibility score
                if (compat > nextCompat) {
                    compat = nextCompat;
                    bestFriend = friendsData[i];
                }
                
                console.log("Best: " + bestFriend.name);
            }
            // console.log(bestFriend);
        }
    });
}