const jwt = require('jsonwebtoken');
const createJWT = (user) => {
    const token = jwt.sign({
        user: user
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

const checkJWT = (token) => {
    let check = false;

    try {
        check = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        check = false;
        console.log(err);
    }
    return check;
}

module.exports = { createJWT: createJWT, checkJWT: checkJWT };