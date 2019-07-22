var path = require("path");


module.exports = function(app) {

    // default to home if no matching route
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });

    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}