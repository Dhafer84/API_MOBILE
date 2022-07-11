var express = require('express');
var router = express.Router();

const conn = require("../config/db");

/**
 * @Path /jeu
*/

// url ==> /jeu/create?jeu_name=test&jeu_category=test&jeu_image=test&user_id=test
router.get('/create', function (req, res, next) {
    const jeu_name = req.query.jeu_name;
    const { jeu_category } = req.query;
    const { jeu_image } = req.query;
   const { user_id } = req.query;


    let sqlQuery = 'INSERT INTO `jeu` (`jeu_name`,`jeu_category`,`jeu_image`,`user_id`) VALUES (?,?,?,?)';
    conn.query(sqlQuery, [jeu_name,jeu_category,jeu_image,user_id], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("jeu  added successfully")
        }
    });
});

router.get('/listjeu', function (req, res, next) {

    let sqlQuery = 'SELECT * FROM `jeu`';
    conn.query(sqlQuery, [], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).json(result)
        }
    });
});

// url ==> /personnes/update?id=1&nom=test&prenom=test
router.get('/update', function (req, res, next) {
    const { jeu_id, jeu_name, jeu_category,jeu_image } = req.query;
    if(!jeu_id){
        return res.status(401).send("Id is required");
    }

    let sqlQuery = 'UPDATE `jeu` SET `jeu_name`=?,`jeu_category`=?,`jeu_image`=? WHERE `jeu_id`=?';
    conn.query(sqlQuery, [jeu_name, jeu_category,jeu_image, jeu_id], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("Personne updated successfully ")
        }
    });
});

module.exports = router;
