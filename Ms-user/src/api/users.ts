import bcrypt from 'bcrypt';
import express from 'express';
import {CreateUser} from "../modules/users";
import {User} from "../interfaces/User";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({ message: 'Users routes' });
});

router.post('/create', async function(req, res, next) {
    const {email, firstName, lastName, password, roles} = req.query;
    const hash = async (password: string, saltRound: number) => {
        try {
            const salt = await bcrypt.genSalt(saltRound);

            return await bcrypt.hash(password, salt)
        } catch(error) {
            console.log(error)
        }
    }
    const saltRound = process.env.SALT_ROUNDS as unknown as number;
    const hashPassword = await hash(password as string, +saltRound)
    const user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashPassword,
        roles: roles
    }
    console.log(user)
    const newUser = await CreateUser(user as User)
    res.status(200).json({ message: newUser });
});

export default router;