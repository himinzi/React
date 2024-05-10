const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("product root");
});
router.post("/insert", function(req, res){
    res.send("insert root");
});
router.put("/update", function(req, res){
    res.send("update root");
});
router.delete("/delete", function(req, res){
    res.send("delete route");
});


module.exports = router;