const express = require('express');
const {randomBytes} = require('crypto')

const {createJWT, checkJWT} = require("../modules/jwt.ts");
const router = express.Router();

/* create JWT */
router.get('/create', function(req, res, next) {
    let token = createJWT({name: 'test', role: 'admin'});
    //createRefreshToken()
    res.json({token: token});
});

/* create JWT */
router.get('/verify/:token', function(req, res, next) {
    let check = checkJWT(req.params.token);
    res.json({check: check});
});

/* refresh JWT */
function createRefreshToken() {
    const refreshToken = randomBytes(64).toString('base64');
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    //save refresh token
    return refreshToken;
}
module.exports = router;
