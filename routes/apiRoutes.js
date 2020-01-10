var notesdata = require("../db/db");
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesdata);
      });

    app.post("/api/notes", function(req,res){
        
    })

};