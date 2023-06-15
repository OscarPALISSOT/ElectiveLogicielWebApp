import bcrypt from 'bcrypt';
import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

import {CreateUser, GetUsers, GetUser, DeleteUser, UpdateUser} from "../modules/userCrud";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({ message: 'Users routes' });
});

router.post('/create', function(req, res, next) {
    const { email, name, password } = req.query;
    bcrypt
        .genSalt(10)
        .then((salt: string) => {
            return bcrypt.hash(password as string, salt)
        })
        .catch((err: Error) => console.error(err.message))
    res.status(200).json({ message: 'create' });
});

export default router;