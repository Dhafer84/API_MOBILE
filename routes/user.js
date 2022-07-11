var express = require('express');
var router = express.Router();

const conn = require("../config/db");

/**
 * @Path /login
*/

// url ==> /user/create?first_name=test&last_name=test&email=test&etat_compte=testt&password=tes&role=test&user_image=test
router.get('/create', function (req, res, next) {
    const first_name = req.query.first_name;
    const { last_name } = req.query;
    const { email } = req.query;
    const { password } = req.query;
    const { etat_compte } = req.query;
    const { role } = req.query;
    const { user_image } = req.query;
   


    let sqlQuery = 'INSERT INTO `user` (`first_name`, `last_name`, `email`,`etat_compte`, `password`, `role`, `user_image`) VALUES (?, ?, ?, ?, ?, ?, ?)';
    conn.query(sqlQuery, [first_name,last_name,email,etat_compte,password,role,user_image], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("user  added successfully")
        }
    });
});

router.get('/listuser', function (req, res, next) {

    let sqlQuery = 'SELECT * FROM `user` WHERE email = ?';
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
    const { user_id,first_name,last_name,email,etat_compte,password,role,user_image } = req.query;
    if(!user_id){
        return res.status(401).send("Id is required");
    }

    let sqlQuery = 'UPDATE `user` SET `first_name`=?,`last_name`=?,`user_image`=? WHERE `user_id`=?';
    conn.query(sqlQuery, [user_id,first_name,last_name,user_image, user_id], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("Personne updated successfully ")
        }
    });
});

module.exports = router;
