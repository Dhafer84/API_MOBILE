var express = require('express');
var router = express.Router();

const conn = require("../config/db");

/**
 * @Path /jeu
*/

// url ==> /tasks/create?name=test&status=1
router.get('/create', function (req, res, next) {
    const name = req.query.name;
    const { status } = req.query;

    let sqlQuery = 'INSERT INTO `task` (`name`,`status`) VALUES (?,?)';
    conn.query(sqlQuery, [name,status], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("task added successfully")
        }
    });
});
// url ==> /tasks/listTask

router.get('/listTask', function (req, res, next) {

    let sqlQuery = 'SELECT * FROM `task`';
    conn.query(sqlQuery, [], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).json(result)
        }
    });
});

// url ==> /tasks/update?id=1&name=test&status=0
router.get('/update', function (req, res, next) {
    const { id, nom, prenom } = req.query;
    if(!id){
        return res.status(401).send("Id is required");
    }

    let sqlQuery = 'UPDATE `task` SET `name`=?,`status`=? WHERE `id`=?';
    conn.query(sqlQuery, [name, status, id], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("Personne updated successfully ")
        }
    });
});

module.exports = router;
