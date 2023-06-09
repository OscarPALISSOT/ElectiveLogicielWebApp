const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql');

const {createJWT, checkJWT} = require("../modules/jwt");
const router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: "wsAuth",
});


/* create JWT */
router.get('/create', function(req, res, next) {
    let token = createJWT({name: req.query.name, role: req.query.role});
    //createRefreshToken()
    res.json({token: token});
});

/* create JWT */
router.get('/verify', function(req, res, next) {
    let check = checkJWT(req.query.token);
    res.json({check: check});
});

/* refresh JWT */
function createRefreshToken() {
    const refreshToken = crypto.ramdomBytes(64).toString('base64');
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    connection.connect();

    // Créer la requête SQL d'insertion
    const sql = "INSERT INTO RefreshToken (token, expiration_date) VALUES (?, ?)";

    connection.query(sql, [refreshToken, expirationDate], function(err, rows, fields) {
        if (err) {
            console.error('Erreur lors de l\'insertion du token :', err);
            res.status(500).json({ message: 'Erreur lors de l\'insertion du token' });
        } else {
            res.status(200).json({ message: 'Token inséré avec succès' });
        }
    });

    connection.end();
    return refreshToken;
}
module.exports = router;
