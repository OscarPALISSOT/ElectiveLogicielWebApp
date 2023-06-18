import jwt, {JwtPayload} from 'jsonwebtoken';
import {User} from "../interfaces/User";
const createJWT = (user: User) => {
    return jwt.sign({
        user: user
    }, process.env.JWT_SECRET as unknown as string, { expiresIn: '1h' });
}

const checkJWT = (token: string) => {

    let check: boolean | string | JwtPayload = false;

    try {
        check = jwt.verify(token, process.env.JWT_SECRET as unknown as string);
    } catch (err) {
        check = false;
        console.log(err);
    }
    return check;
}

module.exports = { createJWT: createJWT, checkJWT: checkJWT };